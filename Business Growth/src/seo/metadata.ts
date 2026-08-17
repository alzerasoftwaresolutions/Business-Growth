import type { PackageConfigs } from '../types';
import type { SeoIndexRules } from '../types/seo';
import type { BreadcrumbItem } from '../components/types';

/**
 * Pure SEO metadata resolvers. Every rule derives from seo.config.json (the
 * authoritative contract) — nothing is invented. Keep these DOM-free so they
 * are unit-testable in the node environment.
 */

export interface ResolvedSeo {
  title: string;
  description: string;
  image: string;
  robots: SeoIndexRules;
  canonicalUrl: string;
}

export function resolveEnvironment(configs: PackageConfigs): string {
  return configs.project.website.environment;
}

/** Robots rules: environment rules win, then global indexing flags. */
export function resolveRobots(configs: PackageConfigs, override?: SeoIndexRules): SeoIndexRules {
  if (override) {
    return override;
  }
  const env = resolveEnvironment(configs);
  const envRule = configs.seo.seo.indexing.environmentRules[env as keyof typeof configs.seo.seo.indexing.environmentRules];
  if (envRule) {
    return { index: envRule.index, follow: envRule.follow };
  }
  return {
    index: configs.seo.seo.indexing.allowIndexing,
    follow: configs.seo.seo.indexing.allowFollowing,
  };
}

/** Applies the site titleTemplate (`%s` placeholder) when a site name exists. */
export function applyTitleTemplate(configs: PackageConfigs, title: string): string {
  const site = configs.seo.seo.site;
  if (!title) {
    return site.defaultTitle || '';
  }
  const template = site.titleTemplate;
  if (template.includes('%s') && site.name) {
    return `${title}${template.replace('%s', '')}${site.name}`;
  }
  return title;
}

/**
 * Resolves the document title for a template. Priority: explicit override →
 * per-page configured metadata → metadata defaults → empty (never invented).
 */
export function resolveTitle(configs: PackageConfigs, template: string, override?: string): string {
  if (override) {
    return applyTitleTemplate(configs, override);
  }
  const page = configs.seo.seo.metadata.pages[template];
  const title = page?.title || configs.seo.seo.metadata.defaults.title || '';
  return applyTitleTemplate(configs, title);
}

/** Resolves the meta description (override → per-page → defaults → empty). */
export function resolveDescription(configs: PackageConfigs, template: string, override?: string): string {
  if (override) {
    return override;
  }
  const page = configs.seo.seo.metadata.pages[template];
  return page?.description || configs.seo.seo.metadata.defaults.description || '';
}

/** Resolves the social image (override → per-page → defaults → empty). */
export function resolveImage(configs: PackageConfigs, template: string, override?: string): string {
  if (override) {
    return override;
  }
  const page = configs.seo.seo.metadata.pages[template];
  return page?.image || configs.seo.seo.metadata.defaults.image || '';
}

/**
 * Builds the canonical URL from the configured base URL + current path,
 * honoring the trailing-slash and force-HTTPS rules. Empty when no base URL
 * has been provisioned yet.
 */
export function resolveCanonicalUrl(configs: PackageConfigs, path: string): string {
  const { canonical } = configs.seo.seo;
  const base = canonical.baseUrl || configs.seo.seo.site.canonicalUrl || '';
  if (!base) {
    return '';
  }
  let resolved = base.replace(/\/+$/, '') + path;
  if (canonical.trailingSlash && !resolved.endsWith('/')) {
    resolved = `${resolved}/`;
  }
  if (canonical.forceHttps && resolved.startsWith('http://')) {
    resolved = `https://${resolved.slice(7)}`;
  }
  return resolved;
}

const ABSOLUTE_URL = /^https?:\/\//;

/** Canonical base used for absolute structured-data URLs (empty until provisioned). */
export function resolveBaseUrl(configs: PackageConfigs): string {
  return configs.seo.seo.canonical.baseUrl || configs.seo.seo.site.canonicalUrl || '';
}

/**
 * Structured data (07 §21-§28). Renders Organization JSON-LD when the client
 * has provisioned name + URL, and a BreadcrumbList when enabled and a trail is
 * provided. No fabricated organization is ever emitted.
 */
export function buildStructuredData(
  configs: PackageConfigs,
  input: { breadcrumbs?: BreadcrumbItem[] }
): Record<string, unknown>[] {
  const data: Record<string, unknown>[] = [];
  const base = resolveBaseUrl(configs);
  const { organization, breadcrumbs: breadcrumbSeo } = configs.seo.seo.structuredData;

  if (organization.enabled && organization.name && organization.url) {
    data.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: organization.name,
      url: organization.url,
      ...(organization.logo ? { logo: organization.logo } : {}),
      ...(organization.telephone ? { telephone: organization.telephone } : {}),
      ...(organization.email ? { email: organization.email } : {}),
      ...(organization.sameAs.length > 0 ? { sameAs: organization.sameAs } : {}),
    });
  }

  if (breadcrumbSeo.enabled && input.breadcrumbs && input.breadcrumbs.length > 0) {
    data.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: input.breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        ...(crumb.href && ABSOLUTE_URL.test(crumb.href) ? { item: crumb.href } : base && crumb.href ? { item: `${base}${crumb.href}` } : {}),
      })),
    });
  }

  return data;
}