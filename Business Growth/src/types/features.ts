/** Mirror of `configuration/features.config.json`. */

export interface FeaturePageState {
  enabled: boolean;
}

export interface CollectionPageState extends FeaturePageState {
  detailPages?: boolean;
  categories?: boolean;
  technicalSpecifications?: boolean;
  brochures?: boolean;
  downloads?: boolean;
  gallery?: boolean;
  caseStudies?: boolean;
  tags?: boolean;
  authors?: boolean;
  search?: boolean;
  multipleLocations?: boolean;
}

export interface FeaturesPages {
  home: FeaturePageState;
  about: FeaturePageState;
  services: CollectionPageState;
  products: CollectionPageState;
  projects: CollectionPageState;
  testimonials: FeaturePageState;
  blog: CollectionPageState;
  contact: FeaturePageState;
  rfq: FeaturePageState;
  faq: CollectionPageState;
  team: FeaturePageState;
  certifications: FeaturePageState;
  partners: FeaturePageState;
  locations: CollectionPageState;
}

export interface FeaturesContent {
  companyProfile: FeaturePageState;
  leadershipMessage: FeaturePageState;
  companyTimeline: FeaturePageState;
  companyStatistics: FeaturePageState;
  clientLogos: FeaturePageState;
  partnerLogos: FeaturePageState;
  certifications: FeaturePageState;
  awards: FeaturePageState;
}

export interface FeaturesLeadGeneration {
  enabled: boolean;
  contactForm: FeaturePageState;
  rfq: FeaturePageState;
  callbackRequest: FeaturePageState;
  newsletter: FeaturePageState;
  whatsapp: FeaturePageState;
  clickToCall: FeaturePageState;
  emailContact: FeaturePageState;
}

export interface FeaturesMedia {
  imageGallery: FeaturePageState;
  lightbox: FeaturePageState;
  video: FeaturePageState;
  videoEmbeds: FeaturePageState;
  documentDownloads: FeaturePageState;
  pdfViewer: FeaturePageState;
}

export interface FeaturesNavigation {
  stickyHeader: FeaturePageState;
  mobileNavigation: FeaturePageState;
  breadcrumbNavigation: FeaturePageState;
  megaMenu: FeaturePageState;
  backToTop: FeaturePageState;
}

export interface FeaturesSearch {
  enabled: boolean;
  globalSearch: FeaturePageState;
  productSearch: FeaturePageState;
  serviceSearch: FeaturePageState;
  projectSearch: FeaturePageState;
  blogSearch: FeaturePageState;
}

export interface FeaturesFiltering {
  enabled: boolean;
  products: FeaturePageState;
  services: FeaturePageState;
  projects: FeaturePageState;
  blog: FeaturePageState;
}

export interface FeaturesMarketing {
  analytics: FeaturePageState;
  searchConsole: FeaturePageState;
  socialMedia: FeaturePageState;
  newsletter: FeaturePageState;
  campaignLandingPages: FeaturePageState;
}

export interface FeaturesTrust {
  testimonials: FeaturePageState;
  clientLogos: FeaturePageState;
  partnerLogos: FeaturePageState;
  certifications: FeaturePageState;
  awards: FeaturePageState;
  statistics: FeaturePageState;
}

export interface FeaturesCommunication {
  email: FeaturePageState;
  phone: FeaturePageState;
  whatsapp: FeaturePageState;
  googleMaps: FeaturePageState;
  socialLinks: FeaturePageState;
  officeLocations: FeaturePageState;
}

export interface FeaturesSeo {
  enabled: boolean;
  metadata: FeaturePageState;
  sitemap: FeaturePageState;
  robotsTxt: FeaturePageState;
  canonicalUrls: FeaturePageState;
  openGraph: FeaturePageState;
  structuredData: FeaturePageState;
  breadcrumbs: FeaturePageState;
  imageSeo: FeaturePageState;
}

export interface FeaturesAccessibility {
  enabled: boolean;
  keyboardNavigation: FeaturePageState;
  focusStates: FeaturePageState;
  reducedMotion: FeaturePageState;
  semanticHtml: FeaturePageState;
}

export interface FeaturesObject {
  pages: FeaturesPages;
  content: FeaturesContent;
  leadGeneration: FeaturesLeadGeneration;
  media: FeaturesMedia;
  navigation: FeaturesNavigation;
  search: FeaturesSearch;
  filtering: FeaturesFiltering;
  marketing: FeaturesMarketing;
  trust: FeaturesTrust;
  communication: FeaturesCommunication;
  seo: FeaturesSeo;
  accessibility: FeaturesAccessibility;
}

export interface FeatureDependencies {
  rfq: string[];
  productDetails: string[];
  productCategories: string[];
  serviceDetails: string[];
  projectDetails: string[];
  blogCategories: string[];
  blogTags: string[];
  lightbox: string[];
  multipleLocations: string[];
}

export interface FeatureRules {
  doNotEnableUnapprovedFeatures: boolean;
  doNotCreatePagesForDisabledFeatures: boolean;
  doNotCreateNavigationForDisabledPages: boolean;
  doNotCreateContentModelsForUnusedFeatures: boolean;
  doNotExposeDisabledFeaturesInProduction: boolean;
  featureDependenciesMustBeSatisfied: boolean;
}

export interface FeaturesConfig {
  $schema?: string;
  features: FeaturesObject;
  featureDependencies: FeatureDependencies;
  featureRules: FeatureRules;
}
