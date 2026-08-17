import type { PackageConfigs } from '../types';
import { buildRouteEntries, TEMPLATE_LABELS, type PageTemplate } from '../app/routes';
import type { BreadcrumbItem } from '../components/types';

/**
 * Maps the breadcrumb `showOn` keys in navigation.config.json to the PageTemplate
 * values used by the route table (config uses kebab-case; templates are camelCase).
 */
const SHOW_ON_TEMPLATE_KEYS: Record<string, PageTemplate> = {
  services: 'services',
  'service-details': 'serviceDetails',
  products: 'products',
  'product-details': 'productDetails',
  projects: 'projects',
  'project-details': 'projectDetails',
  blog: 'blog',
  'blog-details': 'blogDetails',
  faq: 'faq',
  rfq: 'rfq',
};

/**
 * Detail/category templates breadcrumb to their parent listing section so the
 * trail reads Home → Services → Item, never Home → Service Details → Item.
 */
const PARENT_TEMPLATES: Partial<Record<PageTemplate, PageTemplate>> = {
  serviceDetails: 'services',
  productDetails: 'products',
  productCategories: 'products',
  projectDetails: 'projects',
  blogDetails: 'blog',
  locationDetails: 'locations',
};

/**
 * Resolves the breadcrumb trail for a template from configuration
 * (navigation.breadcrumbs). Returns an empty trail when breadcrumbs are
 * disabled or the template is not in `showOn`. The final "current" item is
 * supplied by the caller (detail pages append the item label).
 */
export function resolveTemplateBreadcrumbs(
  configs: PackageConfigs,
  template: PageTemplate,
  current?: { label: string; href?: string }
): BreadcrumbItem[] {
  const breadcrumbs = configs.navigation.breadcrumbs;
  const enabledForTemplate = breadcrumbs.showOn.some((key) => SHOW_ON_TEMPLATE_KEYS[key] === template);
  if (!breadcrumbs.enabled || !enabledForTemplate) {
    return [];
  }

  const trail: BreadcrumbItem[] = [{ label: breadcrumbs.homeLabel || 'Home', href: '/' }];

  const sectionTemplate = PARENT_TEMPLATES[template] ?? template;
  const sectionEntry = buildRouteEntries(configs).find((entry) => entry.template === sectionTemplate);
  if (sectionEntry && sectionEntry.path !== '/') {
    trail.push({ label: TEMPLATE_LABELS[sectionTemplate], href: sectionEntry.path });
  }

  if (current && current.label) {
    trail.push(current);
  }

  return trail;
}