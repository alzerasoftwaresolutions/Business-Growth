import type { PackageConfigs } from '../types';

/**
 * Page templates supported by the package (per 01-information-architecture-
 * and-routing.md). A template only produces a route when the configuration
 * enables it; the architecture remains capable of every template.
 */
export type PageTemplate =
  | 'home'
  | 'about'
  | 'services'
  | 'serviceDetails'
  | 'products'
  | 'productCategories'
  | 'productDetails'
  | 'projects'
  | 'projectDetails'
  | 'testimonials'
  | 'blog'
  | 'blogDetails'
  | 'contact'
  | 'rfq'
  | 'faq'
  | 'team'
  | 'certifications'
  | 'partners'
  | 'locations'
  | 'locationDetails'
  | 'privacy'
  | 'terms';

export interface RouteEntry {
  /** react-router path pattern (dynamic segments use `:param`). */
  path: string;
  template: PageTemplate;
  /** features.pages key gating this route, when applicable. */
  pageKey?: string;
}

interface TemplateSpec {
  template: PageTemplate;
  pageKey?: string;
  path: string;
  enabled: boolean;
}

const toRoutePattern = (rule: string): string => rule.replace(/\{slug\}/g, ':slug');

/**
 * Builds the feature-aware route table from the authoritative configuration.
 *
 * Routing rules live in exactly one place: paths come from
 * `seo.config.json` → `seo.urls.rules` where the package defines them (IA
 * defaults otherwise), and enablement comes from `features.config.json` →
 * `features.pages` plus `navigation.config.json` footer legal links.
 *
 * A page exists only when supported by configuration. Disabled features never
 * expose routes (see `featureRules.doNotExposeDisabledFeaturesInProduction`).
 */
export function buildRouteEntries(configs: PackageConfigs): RouteEntry[] {
  const pages = configs.features.features.pages;
  const rules = configs.seo.seo.urls.rules;

  const legalItems = configs.navigation.footer.legal.enabled
    ? configs.navigation.footer.legal.items
    : [];
  const hasLegalLink = (path: string) =>
    legalItems.some((item) => item.enabled && item.href === path);

  const specs: TemplateSpec[] = [
    { template: 'home', pageKey: 'home', path: '/', enabled: pages.home.enabled },
    { template: 'about', pageKey: 'about', path: '/about', enabled: pages.about.enabled },
    { template: 'services', pageKey: 'services', path: toRoutePattern(rules.services), enabled: pages.services.enabled },
    { template: 'serviceDetails', pageKey: 'services', path: toRoutePattern(rules.serviceDetails), enabled: pages.services.detailPages === true },
    { template: 'products', pageKey: 'products', path: toRoutePattern(rules.products), enabled: pages.products.enabled },
    { template: 'productCategories', pageKey: 'products', path: toRoutePattern(rules.productCategories), enabled: pages.products.categories === true },
    { template: 'productDetails', pageKey: 'products', path: toRoutePattern(rules.productDetails), enabled: pages.products.detailPages === true },
    { template: 'projects', pageKey: 'projects', path: toRoutePattern(rules.projects), enabled: pages.projects.enabled },
    { template: 'projectDetails', pageKey: 'projects', path: toRoutePattern(rules.projectDetails), enabled: pages.projects.detailPages === true },
    { template: 'testimonials', pageKey: 'testimonials', path: '/testimonials', enabled: pages.testimonials.enabled },
    { template: 'blog', pageKey: 'blog', path: toRoutePattern(rules.blog), enabled: pages.blog.enabled },
    { template: 'blogDetails', pageKey: 'blog', path: toRoutePattern(rules.blogPosts), enabled: pages.blog.enabled },
    { template: 'contact', pageKey: 'contact', path: toRoutePattern(rules.contact), enabled: pages.contact.enabled },
    { template: 'rfq', pageKey: 'rfq', path: toRoutePattern(rules.rfq), enabled: pages.rfq.enabled },
    { template: 'faq', pageKey: 'faq', path: toRoutePattern(rules.faq), enabled: pages.faq.enabled },
    { template: 'team', pageKey: 'team', path: '/team', enabled: pages.team.enabled },
    { template: 'certifications', pageKey: 'certifications', path: '/certifications', enabled: pages.certifications.enabled },
    { template: 'partners', pageKey: 'partners', path: '/partners', enabled: pages.partners.enabled },
    { template: 'locations', pageKey: 'locations', path: '/locations', enabled: pages.locations.enabled },
    {
      template: 'locationDetails',
      pageKey: 'locations',
      path: '/locations/:slug',
      enabled: pages.locations.enabled === true && pages.locations.multipleLocations === true,
    },
    { template: 'privacy', path: '/privacy', enabled: hasLegalLink('/privacy') },
    { template: 'terms', path: '/terms', enabled: hasLegalLink('/terms') },
  ];

  return specs
    .filter((spec) => spec.enabled)
    .map(({ template, pageKey, path }) => ({ path, template, pageKey }));
}

export const TEMPLATE_LABELS: Record<PageTemplate, string> = {
  home: 'Home',
  about: 'About',
  services: 'Services',
  serviceDetails: 'Service Details',
  products: 'Products',
  productCategories: 'Product Categories',
  productDetails: 'Product Details',
  projects: 'Projects',
  projectDetails: 'Project Details',
  testimonials: 'Testimonials',
  blog: 'Blog',
  blogDetails: 'Article',
  contact: 'Contact',
  rfq: 'Request a Quote',
  faq: 'FAQs',
  team: 'Team',
  certifications: 'Certifications',
  partners: 'Partners',
  locations: 'Locations',
  locationDetails: 'Location',
  privacy: 'Privacy Policy',
  terms: 'Terms of Use',
};

/**
 * Resolves a neutral page title for a template. Prefers configured content
 * (contact page title, RFQ title, per-page SEO metadata) and falls back to the
 * template's neutral label — never invented client content.
 */
export function resolvePageTitle(configs: PackageConfigs, template: PageTemplate): string {
  const contact = configs.contact;
  if (template === 'contact') {
    return contact.contact.contactPage.title || TEMPLATE_LABELS.contact;
  }
  if (template === 'rfq') {
    return contact.rfq.title || TEMPLATE_LABELS.rfq;
  }
  if (template === 'privacy' || template === 'terms') {
    const item = configs.navigation.footer.legal.items.find(
      (entry) => (entry.href === '/privacy' && template === 'privacy') || (entry.href === '/terms' && template === 'terms')
    );
    return item?.label || TEMPLATE_LABELS[template];
  }
  const metadataPage = configs.seo.seo.metadata.pages[template as keyof typeof configs.seo.seo.metadata.pages];
  return metadataPage?.title || TEMPLATE_LABELS[template];
}
