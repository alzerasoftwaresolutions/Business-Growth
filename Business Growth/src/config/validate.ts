import type { PackageConfigs } from '../types';
import type { NavigationItem } from '../types/navigation';
import type { NavigationDropdowns } from '../types/navigation';
import { validateWithSchema, type ConfigKey } from './schema';
import type { ConfigIssue } from './errors';

export const CONFIG_KEYS: ConfigKey[] = [
  'project',
  'business',
  'features',
  'navigation',
  'contact',
  'seo',
  'analytics',
];

export interface ConfigValidationResult {
  /** `true` when there are no `error`-level issues. */
  valid: boolean;
  issues: ConfigIssue[];
}

/**
 * Validates the full configuration bundle:
 *
 * 1. JSON Schema validation (Ajv) of all seven files against the aligned
 *    schemas — structural contract errors.
 * 2. Cross-configuration consistency checks — relationships the schemas cannot
 *    express across files (feature dependencies, navigation → disabled pages).
 * 3. Informational warnings for empty client content (valid template state).
 *
 * `error`-level issues mean the application cannot safely operate on the
 * configuration. `warn`-level issues are informational.
 */
export function validateConfigs(configs: PackageConfigs): ConfigValidationResult {
  const issues: ConfigIssue[] = [];

  for (const key of CONFIG_KEYS) {
    issues.push(...validateWithSchema(key, configs[key] as unknown));
  }

  issues.push(...checkConsistency(configs));
  issues.push(...collectContentWarnings(configs));

  const valid = issues.every((issue) => issue.level !== 'error');
  return { valid, issues };
}

/**
 * Cross-configuration consistency checks. These express relationships the
 * individual JSON schemas cannot: navigation must not link to disabled
 * features, feature dependencies must be satisfied, and indexing must respect
 * the active environment.
 */
export function checkConsistency(configs: PackageConfigs): ConfigIssue[] {
  const issues: ConfigIssue[] = [];

  const push = (config: string, path: string, message: string) => {
    issues.push({ level: 'error', config, path, message });
  };

  const { project, navigation, features } = configs;

  // -------------------------------------------------------------------------
  // Feature-dependency invariants (featureRules.featureDependenciesMustBeSatisfied).
  // -------------------------------------------------------------------------
  const { pages: featurePages, media, leadGeneration } = features.features;
  const dependencies = features.featureDependencies;

  const featureEnabled = (key: string): boolean | undefined => {
    switch (key) {
      case 'contactForm':
        return leadGeneration.contactForm.enabled;
      case 'rfq':
        return leadGeneration.rfq.enabled;
      case 'lightbox':
        return media.lightbox.enabled;
      case 'imageGallery':
        return media.imageGallery.enabled;
      case 'productDetails':
        return featurePages.products.detailPages;
      case 'productCategories':
        return featurePages.products.categories;
      case 'serviceDetails':
        return featurePages.services.detailPages;
      case 'projectDetails':
        return featurePages.projects.detailPages;
      case 'blogCategories':
        return featurePages.blog.categories;
      case 'blogTags':
        return featurePages.blog.tags;
      case 'multipleLocations':
        return featurePages.locations.multipleLocations;
      default:
        return featurePages[key as keyof typeof featurePages]?.enabled;
    }
  };

  for (const [dependent, prerequisites] of Object.entries(dependencies)) {
    if (!Array.isArray(prerequisites)) {
      continue;
    }
    if (featureEnabled(dependent) !== true) {
      continue;
    }
    for (const prerequisite of prerequisites) {
      if (featureEnabled(prerequisite) !== true) {
        push(
          'features.config.json',
          `features.featureDependencies.${dependent}`,
          `Feature "${dependent}" is enabled but requires "${prerequisite}", which is disabled.`
        );
      }
    }
  }

  // -------------------------------------------------------------------------
  // Navigation must not link to disabled features/pages.
  // -------------------------------------------------------------------------
  const routePageMap: Record<string, keyof typeof featurePages> = {
    '/services': 'services',
    '/products': 'products',
    '/projects': 'projects',
    '/blog': 'blog',
    '/contact': 'contact',
    '/rfq': 'rfq',
    '/faq': 'faq',
    '/team': 'team',
    '/certifications': 'certifications',
    '/partners': 'partners',
    '/locations': 'locations',
    '/about': 'about',
    '/testimonials': 'testimonials',
  };

  const checkNavItem = (item: NavigationItem, location: string) => {
    if (item.enabled === false) {
      return;
    }
    const href = item.href ?? '';
    const path = href.split('?')[0].replace(/\/+$/, '');
    const pageKey = routePageMap[path];
    if (pageKey && featurePages[pageKey]?.enabled === false) {
      push(
        'navigation.config.json',
        `${location}.href`,
        `Link "${href}" targets "${pageKey}", which is disabled in features.features.pages.`
      );
    }
    item.children?.forEach((child, index) =>
      checkNavItem(child, `${location}.children[${index}]`)
    );
  };

  const walkNavList = (items: NavigationItem[] | undefined, location: string) => {
    items?.forEach((item, index) => checkNavItem(item, `${location}[${index}]`));
  };

  walkNavList(navigation.navigation.header.primary, 'navigation.navigation.header.primary');
  walkNavList(navigation.navigation.mobile.primary, 'navigation.navigation.mobile.primary');
  walkNavList(navigation.navigation.secondary.items, 'navigation.navigation.secondary.items');
  walkNavList(navigation.utilityNavigation.items, 'navigation.utilityNavigation.items');
  walkNavList(navigation.externalLinks, 'navigation.externalLinks');
  navigation.footer.columns.forEach((column, columnIndex) => {
    walkNavList(column.items, `navigation.footer.columns[${columnIndex}].items`);
  });

  const dropdownKeys = Object.keys(navigation.dropdowns ?? {}) as (keyof NavigationDropdowns)[];
  for (const key of dropdownKeys) {
    const dropdown = navigation.dropdowns?.[key];
    if (!dropdown || dropdown.enabled === false) {
      continue;
    }
    const pageKey = key as keyof typeof featurePages;
    if (featurePages[pageKey]?.enabled === false) {
      push(
        'navigation.config.json',
        `navigation.dropdowns.${key}.enabled`,
        `Dropdown "${key}" is enabled but the "${pageKey}" page is disabled.`
      );
    }
    dropdown.items.forEach((item, index) =>
      checkNavItem(item as NavigationItem, `navigation.dropdowns.${key}.items[${index}]`)
    );
  }

  // -------------------------------------------------------------------------
  // Environment indexing rules (seoRules: doNotIndexDevelopment/StagingEnvironment).
  // -------------------------------------------------------------------------
  const environment = project.website.environment;
  const envRule = configs.seo.seo.indexing.environmentRules[environment];
  if (environment !== 'production' && envRule?.index === true) {
    push(
      'seo.config.json',
      `seo.seo.indexing.environmentRules.${environment}.index`,
      `Environment is "${environment}" but indexing is enabled. Development/staging must not be indexed.`
    );
  }

  return issues;
}

/**
 * Informational warnings for empty client content. In a reusable template,
 * empty client fields are valid template state (they are filled per client).
 */
export function collectContentWarnings(configs: PackageConfigs): ConfigIssue[] {
  const issues: ConfigIssue[] = [];
  let warningCount = 0;
  const MAX_WARNINGS = 100;

  const record = (config: string, path: string, message: string) => {
    if (warningCount >= MAX_WARNINGS) {
      return;
    }
    warningCount += 1;
    issues.push({ level: 'warn', config, path, message });
  };

  const walk = (value: unknown, path: string, config: string) => {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        record(config, path, 'Empty array — client content expected.');
      } else {
        value.forEach((item, index) => walk(item, `${path}[${index}]`, config));
      }
      return;
    }
    if (typeof value === 'object' && value !== null) {
      const keys = Object.keys(value);
      if (keys.length === 0) {
        record(config, path, 'Empty object — client content expected.');
      } else {
        keys.forEach((key) => {
          if (key.startsWith('$')) {
            return;
          }
          walk(
            (value as Record<string, unknown>)[key],
            path ? `${path}.${key}` : key,
            config
          );
        });
      }
      return;
    }
    if (typeof value === 'string') {
      if (value.trim() === '') {
        record(config, path, 'Empty string — client content expected.');
      } else if (/(example\.com|yourdomain|placeholder|todo|localhost)/i.test(value)) {
        record(config, path, `Looks like a placeholder value: "${value}".`);
      }
    }
  };

  const { project, business, seo, contact, analytics } = configs;

  walk(business.business, 'business', 'business.config.json');
  walk(business.contact, 'business.contact', 'business.config.json');
  walk(business.socialMedia, 'business.socialMedia', 'business.config.json');
  walk(project.client, 'project.client', 'project.config.json');
  walk(project.website, 'project.website', 'project.config.json');
  walk(project.contact, 'project.contact', 'project.config.json');
  walk(seo.seo.site, 'seo.seo.site', 'seo.config.json');
  walk(contact.contact.primaryContact, 'contact.contact.primaryContact', 'contact.config.json');
  walk(analytics.analytics.googleAnalytics.measurementId, 'analytics.analytics.googleAnalytics.measurementId', 'analytics.config.json');

  return issues;
}
