/** Mirror of `configuration/seo.config.json`. */

export interface SeoIndexRules {
  index: boolean;
  follow: boolean;
}

export interface SeoEnvironmentIndexing {
  development: SeoIndexRules;
  staging: SeoIndexRules;
  production: SeoIndexRules;
}

export interface SeoSite {
  name: string;
  legalName: string;
  url: string;
  canonicalUrl: string;
  defaultLanguage: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultKeywords: string[];
  defaultImage: string;
  favicon: string;
  themeColor: string;
}

export interface SeoIndexing {
  allowIndexing: boolean;
  allowFollowing: boolean;
  environmentRules: SeoEnvironmentIndexing;
}

export interface SeoRobots {
  enabled: boolean;
  default: SeoIndexRules;
  disallow: string[];
  allow: string[];
  sitemap: string;
}

export interface SeoChangeFrequency {
  pages: string;
  services: string;
  products: string;
  projects: string;
  blog: string;
}

export interface SeoSitemap {
  enabled: boolean;
  url: string;
  include: {
    pages: boolean;
    services: boolean;
    serviceDetails: boolean;
    products: boolean;
    productCategories: boolean;
    productDetails: boolean;
    projects: boolean;
    projectDetails: boolean;
    blog: boolean;
    blogPosts: boolean;
    faq: boolean;
    team: boolean;
    certifications: boolean;
    locations: boolean;
  };
  exclude: string[];
  changeFrequency: SeoChangeFrequency;
}

export interface SeoCanonical {
  enabled: boolean;
  baseUrl: string;
  trailingSlash: boolean;
  forceHttps: boolean;
}

export interface PageSeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  robots: SeoIndexRules;
}

export interface SeoMetadata {
  enabled: boolean;
  defaults: {
    title: string;
    description: string;
    image: string;
    type: string;
  };
  pages: Record<string, PageSeoMetadata>;
}

export interface PageOpenGraph {
  title: string;
  description: string;
  image: string;
}

export interface SeoOpenGraph {
  enabled: boolean;
  type: string;
  siteName: string;
  defaultImage: string;
  locale: string;
  pages: Record<string, PageOpenGraph>;
}

export interface SeoTwitter {
  enabled: boolean;
  card: string;
  site: string;
  creator: string;
  defaultImage: string;
}

export interface SeoOrganization {
  enabled: boolean;
  type: string;
  name: string;
  url: string;
  logo: string;
  description: string;
  telephone: string;
  email: string;
  sameAs: string[];
}

export interface SeoLocalBusiness {
  enabled: boolean;
  type: string;
  name: string;
  description: string;
  url: string;
  logo: string;
  telephone: string;
  email: string;
  priceRange: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  geo: {
    latitude: number | null;
    longitude: number | null;
  };
  openingHours: string[];
  sameAs: string[];
}

export interface SeoStructuredDataType {
  enabled: boolean;
  type: string;
}

export interface SeoStructuredData {
  enabled: boolean;
  organization: SeoOrganization;
  localBusiness: SeoLocalBusiness;
  services: SeoStructuredDataType & { includeProvider?: boolean };
  products: SeoStructuredDataType & { includeBrand?: boolean; includeOffers?: boolean };
  projects: SeoStructuredDataType;
  articles: SeoStructuredDataType & { includeAuthor?: boolean; includePublisher?: boolean };
  breadcrumbs: { enabled: boolean };
  faq: { enabled: boolean };
}

export interface SeoBreadcrumbs {
  enabled: boolean;
  homeLabel: string;
  separator: string;
}

export interface SeoImages {
  enabled: boolean;
  defaultAltText: string;
  requireAltText: boolean;
  allowEmptyAltTextForDecorativeImages: boolean;
  socialImage: {
    width: number;
    height: number;
  };
}

export interface SeoUrlRules {
  services: string;
  serviceDetails: string;
  products: string;
  productCategories: string;
  productDetails: string;
  projects: string;
  projectDetails: string;
  blog: string;
  blogPosts: string;
  faq: string;
  contact: string;
  rfq: string;
}

export interface SeoUrls {
  format: string;
  lowercase: boolean;
  removeTrailingSlash: boolean;
  removeFileExtensions: boolean;
  allowedCharacters: string;
  rules: SeoUrlRules;
}

export interface SeoPagination {
  enabled: boolean;
  canonicalStrategy: string;
  noindexPaginatedPages: boolean;
}

export interface SeoRedirectRule {
  from: string;
  to: string;
}

export interface SeoRedirects {
  enabled: boolean;
  rules: SeoRedirectRule[];
}

export interface SeoSearchEngineVerification {
  google: {
    enabled: boolean;
    method: string;
    value: string;
  };
  bing: {
    enabled: boolean;
    method: string;
    value: string;
  };
}

export interface SeoLocalSeo {
  enabled: boolean;
  businessName: string;
  primaryLocation: string;
  serviceAreas: string[];
  localKeywords: string[];
  googleBusinessProfile: {
    enabled: boolean;
    url: string;
  };
}

export interface SeoInternationalSeo {
  enabled: boolean;
  supportedLanguages: string[];
  defaultLanguage: string;
  hreflang: {
    enabled: boolean;
  };
}

export interface SeoContentRules {
  enabled: boolean;
  requireUniquePageTitles: boolean;
  requireUniqueMetaDescriptions: boolean;
  requireLogicalHeadingHierarchy: boolean;
  requireDescriptiveUrls: boolean;
  requireDescriptiveLinkText: boolean;
  requireImageAltText: boolean;
  avoidKeywordStuffing: boolean;
  avoidDuplicateContent: boolean;
}

export interface SeoPerformanceRules {
  enabled: boolean;
  optimizeImages: boolean;
  lazyLoadImages: boolean;
  preloadCriticalAssets: boolean;
  optimizeFonts: boolean;
  minimizeBlockingResources: boolean;
}

export interface SeoAnalyticsIntegration {
  googleAnalytics: {
    enabled: boolean;
    measurementId: string;
  };
  googleSearchConsole: {
    enabled: boolean;
    verificationValue: string;
  };
}

export interface SeoObject {
  enabled: boolean;
  site: SeoSite;
  indexing: SeoIndexing;
  robots: SeoRobots;
  sitemap: SeoSitemap;
  canonical: SeoCanonical;
  metadata: SeoMetadata;
  openGraph: SeoOpenGraph;
  twitter: SeoTwitter;
  structuredData: SeoStructuredData;
  breadcrumbs: SeoBreadcrumbs;
  images: SeoImages;
  urls: SeoUrls;
  pagination: SeoPagination;
  redirects: SeoRedirects;
  searchEngineVerification: SeoSearchEngineVerification;
  localSeo: SeoLocalSeo;
  internationalSeo: SeoInternationalSeo;
  contentSeo: SeoContentRules;
  performanceSeo: SeoPerformanceRules;
  analyticsIntegration: SeoAnalyticsIntegration;
}

export interface SeoPageOverride {
  path: string;
  [key: string]: unknown;
}

export interface SeoRules {
  clientProvidedSeoDataIsAuthoritative: boolean;
  doNotInventBusinessKeywords: boolean;
  doNotInventBusinessClaims: boolean;
  doNotInventLocations: boolean;
  doNotInventCertifications: boolean;
  doNotInventStatistics: boolean;
  doNotCreateDuplicateMetadata: boolean;
  doNotIndexDevelopmentEnvironment: boolean;
  doNotIndexStagingEnvironment: boolean;
  productionMustHaveCanonicalUrls: boolean;
  productionMustHaveSitemap: boolean;
  productionMustHaveRobotsTxt: boolean;
  productionMustHaveValidMetadata: boolean;
  productionMustHaveStructuredDataWhereApplicable: boolean;
  respectFeatureConfiguration: boolean;
}

export interface SeoConfig {
  $schema?: string;
  seo: SeoObject;
  pageSeoOverrides: SeoPageOverride[];
  seoRules: SeoRules;
}
