/**
 * TypeScript contracts mirroring the ACTUAL configuration structures in
 * `configuration/*.config.json` (the authoritative implementation contract).
 *
 * These types are deliberately hand-written against the shipped config files.
 * The shipped JSON schemas are currently OUT OF SYNC with the configs — see
 * `configuration/SCHEMA-ALIGNMENT.md`. Per the approved decision, configs are
 * the source of truth and schemas will be aligned in Phase 4.
 *
 * Do not add fields that do not exist in the actual configuration files.
 */

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

export type Environment = 'development' | 'staging' | 'production';

export type ProjectStatus =
  | 'planning'
  | 'design'
  | 'development'
  | 'testing'
  | 'staging'
  | 'production'
  | 'maintenance'
  | 'archived';

// ---------------------------------------------------------------------------
// project.config.json
// ---------------------------------------------------------------------------

export interface ProjectContactPerson {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface ProjectLogo {
  primary: string;
  secondary: string;
  favicon: string;
}

export interface ProjectLanguages {
  default: string;
  supported: string[];
}

export interface ProjectPages {
  home: boolean;
  about: boolean;
  services: boolean;
  serviceDetails: boolean;
  products: boolean;
  productCategories: boolean;
  productDetails: boolean;
  projects: boolean;
  projectDetails: boolean;
  testimonials: boolean;
  blog: boolean;
  contact: boolean;
  rfq: boolean;
  faq: boolean;
  team: boolean;
  certifications: boolean;
  partners: boolean;
  locations: boolean;
}

export interface ProjectLeadGeneration {
  enabled: boolean;
  contactForm: boolean;
  rfq: boolean;
  whatsapp: boolean;
  clickToCall: boolean;
  email: boolean;
}

export interface ProjectMedia {
  imageGallery: boolean;
  lightbox: boolean;
  video: boolean;
  downloads: boolean;
}

export interface ProjectLocations {
  enabled: boolean;
  multipleLocations: boolean;
  googleMaps: boolean;
}

export interface ProjectSearch {
  enabled: boolean;
  products: boolean;
  services: boolean;
  projects: boolean;
  blog: boolean;
}

export interface ProjectFeatures {
  productCatalog: boolean;
  serviceCatalog: boolean;
  projectPortfolio: boolean;
  blog: boolean;
  testimonials: boolean;
  clientLogos: boolean;
  partnerLogos: boolean;
  certifications: boolean;
  faq: boolean;
  leadGeneration: ProjectLeadGeneration;
  media: ProjectMedia;
  locations: ProjectLocations;
  search: ProjectSearch;
}

export interface ProjectHeaderCta {
  enabled: boolean;
  label: string;
  target: string;
}

export interface ProjectHeaderNavigation {
  sticky: boolean;
  primaryNavigation: string[];
  cta: ProjectHeaderCta;
}

export interface ProjectFooterNavigation {
  showQuickLinks: boolean;
  showServices: boolean;
  showContact: boolean;
  showSocialLinks: boolean;
  showNewsletter: boolean;
}

export interface ProjectNavigation {
  header: ProjectHeaderNavigation;
  footer: ProjectFooterNavigation;
}

export interface ProjectSocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  x: string;
}

export interface ProjectContact {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  googleMapsUrl: string;
  businessHours: string[];
  social: ProjectSocialLinks;
}

export interface ProjectSeoRobots {
  index: boolean;
  follow: boolean;
}

export interface ProjectSeoSitemap {
  enabled: boolean;
}

export interface ProjectSeoStructuredData {
  organization: boolean;
  localBusiness: boolean;
  products: boolean;
  articles: boolean;
  breadcrumbs: boolean;
}

export interface ProjectSeo {
  enabled: boolean;
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  robots: ProjectSeoRobots;
  sitemap: ProjectSeoSitemap;
  structuredData: ProjectSeoStructuredData;
}

export interface ProjectGoogleAnalytics {
  enabled: boolean;
  measurementId: string;
}

export interface ProjectSearchConsole {
  enabled: boolean;
  verificationMethod: string;
  verificationValue: string;
}

export interface ProjectAnalytics {
  enabled: boolean;
  googleAnalytics: ProjectGoogleAnalytics;
  googleSearchConsole: ProjectSearchConsole;
}

export interface ProjectWhatsappIntegration {
  enabled: boolean;
  number: string;
}

export interface ProjectGoogleMapsIntegration {
  enabled: boolean;
  embedUrl: string;
}

export interface ProjectEmailIntegration {
  provider: string;
  destination: string;
}

export interface ProjectRecaptchaIntegration {
  enabled: boolean;
}

export interface ProjectIntegrations {
  whatsapp: ProjectWhatsappIntegration;
  googleMaps: ProjectGoogleMapsIntegration;
  email: ProjectEmailIntegration;
  recaptcha: ProjectRecaptchaIntegration;
}

export interface ProjectContentDirectories {
  content: string;
  assets: string;
  documents: string;
  images: string;
  videos: string;
}

export interface ProjectContent {
  source: string;
  directories: ProjectContentDirectories;
  clientContentRequired: boolean;
  placeholderContentAllowed: boolean;
}

export interface ProjectDesignDirectories {
  root: string;
  pages: string;
  references: string;
}

export interface ProjectDesignRules {
  followApprovedDesign: boolean;
  inventNewVisualDesign: boolean;
  modifyApprovedLayoutWithoutApproval: boolean;
  usePlaceholderVisualsInProduction: boolean;
}

export interface ProjectDesign {
  sourceOfTruth: string;
  directories: ProjectDesignDirectories;
  rules: ProjectDesignRules;
}

export interface ProjectPerformance {
  imageOptimization: boolean;
  lazyLoading: boolean;
  codeSplitting: boolean;
  fontOptimization: boolean;
  assetOptimization: boolean;
}

export interface ProjectSecurity {
  httpsRequired: boolean;
  secureForms: boolean;
  inputValidation: boolean;
  securityHeaders: boolean;
}

export interface ProjectDeploymentEnvironments {
  development: boolean;
  staging: boolean;
  production: boolean;
}

export interface ProjectDeployment {
  provider: string;
  frontend: string;
  backend: string;
  database: string;
  environments: ProjectDeploymentEnvironments;
}

export interface ProjectMaintenance {
  plan: string;
  monitoring: boolean;
  backups: boolean;
  securityUpdates: boolean;
  contentUpdates: boolean;
}

export interface ProjectWarranty {
  enabled: boolean;
  durationDays: number;
}

export interface ProjectDevelopmentStack {
  framework: string;
  buildTool: string;
  styling: string;
}

export interface ProjectBackendStack {
  enabled: boolean;
  runtime: string;
  framework: string;
}

export interface ProjectDatabaseStack {
  enabled: boolean;
  type: string;
}

export interface ProjectVersionControl {
  provider: string;
  repository: string;
}

export interface ProjectDevelopment {
  frontend: ProjectDevelopmentStack;
  backend: ProjectBackendStack;
  database: ProjectDatabaseStack;
  versionControl: ProjectVersionControl;
}

export interface ProjectRules {
  doNotInventClientInformation: boolean;
  doNotInventDesign: boolean;
  doNotAddUnapprovedFeatures: boolean;
  doNotExpandScopeAutomatically: boolean;
  doNotUsePlaceholderContentInProduction: boolean;
  followPackageStandards: boolean;
  followClientDesignManual: boolean;
}

export interface ProjectConfig {
  $schema?: string;
  project: {
    id: string;
    name: string;
    slug: string;
    version: string;
    status: ProjectStatus;
    package: string;
    packageVersion: string;
    createdAt: string;
    updatedAt: string;
  };
  client: {
    id: string;
    legalName: string;
    displayName: string;
    industry: string;
    businessType: string;
    country: string;
    city: string;
    primaryContact: ProjectContactPerson;
  };
  brand: {
    logo: ProjectLogo;
    designSource: string;
    designManualDirectory: string;
    designReferenceDirectory: string;
  };
  website: {
    domain: string;
    canonicalUrl: string;
    environment: Environment;
    languages: ProjectLanguages;
    pages: ProjectPages;
  };
  features: ProjectFeatures;
  navigation: ProjectNavigation;
  contact: ProjectContact;
  seo: ProjectSeo;
  analytics: ProjectAnalytics;
  integrations: ProjectIntegrations;
  content: ProjectContent;
  design: ProjectDesign;
  performance: ProjectPerformance;
  security: ProjectSecurity;
  deployment: ProjectDeployment;
  maintenance: ProjectMaintenance;
  warranty: ProjectWarranty;
  development: ProjectDevelopment;
  projectRules: ProjectRules;
}
