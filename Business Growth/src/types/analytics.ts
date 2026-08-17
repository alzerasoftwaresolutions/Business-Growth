/** Mirror of `configuration/analytics.config.json`. */

export interface AnalyticsEnvironment {
  development: boolean;
  staging: boolean;
  production: boolean;
}

export interface AnalyticsConsentMode {
  enabled: boolean;
  defaultAnalyticsStorage: string;
  defaultAdStorage: string;
}

export interface AnalyticsDataRetention {
  enabled: boolean;
  periodMonths: number;
}

export interface AnalyticsPrivacy {
  enabled: boolean;
  anonymizeIp: boolean;
  respectDoNotTrack: boolean;
  cookieConsentRequired: boolean;
  consentMode: AnalyticsConsentMode;
  dataRetention: AnalyticsDataRetention;
}

export interface GoogleAnalyticsConfig {
  enabled: boolean;
  measurementId: string;
  debugMode: boolean;
  sendPageViews: boolean;
  enhancedMeasurement: boolean;
  configuration: {
    anonymizeIp: boolean;
    allowGoogleSignals: boolean;
    allowAdPersonalizationSignals: boolean;
  };
}

export interface GoogleSearchConsoleConfig {
  enabled: boolean;
  verificationMethod: string;
  verificationValue: string;
  propertyType: string;
}

export interface AnalyticsTrackingPageViews {
  enabled: boolean;
}

export interface AnalyticsTrackingScrollDepth {
  enabled: boolean;
  thresholds: number[];
}

export interface AnalyticsTrackingOutboundLinks {
  enabled: boolean;
}

export interface AnalyticsTrackingFileDownloads {
  enabled: boolean;
}

export interface AnalyticsVideoEngagementEvents {
  start: boolean;
  progress25: boolean;
  progress50: boolean;
  progress75: boolean;
  complete: boolean;
}

export interface AnalyticsTrackingVideoEngagement {
  enabled: boolean;
  events: AnalyticsVideoEngagementEvents;
}

export interface AnalyticsTracking {
  pageViews: AnalyticsTrackingPageViews;
  scrollDepth: AnalyticsTrackingScrollDepth;
  outboundLinks: AnalyticsTrackingOutboundLinks;
  fileDownloads: AnalyticsTrackingFileDownloads;
  videoEngagement: AnalyticsTrackingVideoEngagement;
}

export interface AnalyticsFormEvents {
  view: boolean;
  start: boolean;
  fieldInteraction?: boolean;
  submit: boolean;
  success: boolean;
  error: boolean;
}

export interface AnalyticsLeadChannel {
  enabled: boolean;
  events?: AnalyticsFormEvents;
  conversionEvent?: string;
  event?: string;
}

export interface AnalyticsLeadGeneration {
  enabled: boolean;
  contactForm: AnalyticsLeadChannel;
  rfq: AnalyticsLeadChannel;
  phone: AnalyticsLeadChannel;
  email: AnalyticsLeadChannel;
  whatsapp: AnalyticsLeadChannel;
  map: AnalyticsLeadChannel;
}

export interface AnalyticsCtaTrackingEvents {
  click: boolean;
}

export interface AnalyticsCtaTracking {
  enabled: boolean;
  trackAllCtas: boolean;
  events: AnalyticsCtaTrackingEvents;
  ctaTypes: string[];
}

export interface AnalyticsContentSection {
  view: boolean;
  detailView?: boolean;
  ctaClick?: boolean;
  categoryView?: boolean;
  brochureDownload?: boolean;
  galleryInteraction?: boolean;
  videoInteraction?: boolean;
  search?: boolean;
}

export interface AnalyticsContentEngagement {
  enabled: boolean;
  services: AnalyticsContentSection;
  products: AnalyticsContentSection;
  projects: AnalyticsContentSection;
  blog: AnalyticsContentSection;
  testimonials: AnalyticsContentSection;
  certifications: AnalyticsContentSection;
}

export interface AnalyticsSearch {
  enabled: boolean;
  trackSearches: boolean;
  event: string;
}

export interface AnalyticsDownloads {
  enabled: boolean;
  trackPdf: boolean;
  trackBrochures: boolean;
  trackCatalogs: boolean;
  trackOtherDocuments: boolean;
  event: string;
}

export interface AnalyticsCampaigns {
  enabled: boolean;
  trackUtmParameters: boolean;
  parameters: {
    utm_source: boolean;
    utm_medium: boolean;
    utm_campaign: boolean;
    utm_term: boolean;
    utm_content: boolean;
  };
}

export interface AnalyticsConversionEvent {
  enabled: boolean;
  primary: boolean;
  category: string;
}

export interface AnalyticsConversionEvents {
  enabled: boolean;
  events: {
    generate_lead: AnalyticsConversionEvent;
    generate_quote: AnalyticsConversionEvent;
    phone_click: AnalyticsConversionEvent;
    email_click: AnalyticsConversionEvent;
    whatsapp_click: AnalyticsConversionEvent;
    brochure_download: AnalyticsConversionEvent;
    contact_page_view: AnalyticsConversionEvent;
    rfq_page_view: AnalyticsConversionEvent;
  };
}

export interface AnalyticsEventNamingRules {
  lowercaseOnly: boolean;
  noSpaces: boolean;
  descriptiveNames: boolean;
  consistentNaming: boolean;
}

export interface AnalyticsEventNaming {
  convention: string;
  rules: AnalyticsEventNamingRules;
}

export interface AnalyticsCustomEvent {
  name: string;
  description: string;
  enabled: boolean;
}

export interface AnalyticsCustomDimension {
  name: string;
  description: string;
}

export interface AnalyticsCustomMetric {
  name: string;
  description: string;
}

export interface AnalyticsDashboardRecommendation {
  id: string;
  name: string;
  enabled: boolean;
}

export interface AnalyticsDashboards {
  enabled: boolean;
  recommended: AnalyticsDashboardRecommendation[];
}

export interface AnalyticsBusinessMetrics {
  enabled: boolean;
  primary: string[];
  secondary: string[];
}

export interface AnalyticsReporting {
  enabled: boolean;
  frequency: string;
  metrics: string[];
}

export interface AnalyticsDebuggingEnvironment {
  enabled: boolean;
}

export interface AnalyticsDebugging {
  enabled: boolean;
  development: AnalyticsDebuggingEnvironment;
  production: AnalyticsDebuggingEnvironment;
}

export interface AnalyticsRules {
  doNotTrackSensitivePersonalInformation: boolean;
  doNotTrackPasswords: boolean;
  doNotTrackFormFieldContents: boolean;
  doNotTrackLeadMessageContents: boolean;
  doNotTrackUploadedDocuments: boolean;
  doNotSendPersonallyIdentifiableInformationToAnalytics: boolean;
  doNotInventMeasurementIds: boolean;
  doNotInventVerificationCodes: boolean;
  doNotEnableUnapprovedTrackingServices: boolean;
  respectPrivacyConfiguration: boolean;
  respectFeatureConfiguration: boolean;
  trackBusinessOutcomesOverVanityMetrics: boolean;
}

export interface AnalyticsObject {
  enabled: boolean;
  environment: AnalyticsEnvironment;
  privacy: AnalyticsPrivacy;
  googleAnalytics: GoogleAnalyticsConfig;
  googleSearchConsole: GoogleSearchConsoleConfig;
  tracking: AnalyticsTracking;
  leadGeneration: AnalyticsLeadGeneration;
  ctaTracking: AnalyticsCtaTracking;
  contentEngagement: AnalyticsContentEngagement;
  search: AnalyticsSearch;
  downloads: AnalyticsDownloads;
  campaigns: AnalyticsCampaigns;
  conversionEvents: AnalyticsConversionEvents;
  eventNaming: AnalyticsEventNaming;
  customEvents: AnalyticsCustomEvent[];
  customDimensions: AnalyticsCustomDimension[];
  customMetrics: AnalyticsCustomMetric[];
  dashboards: AnalyticsDashboards;
  businessMetrics: AnalyticsBusinessMetrics;
  reporting: AnalyticsReporting;
  debugging: AnalyticsDebugging;
  rules: AnalyticsRules;
}

export interface AnalyticsConfig {
  $schema?: string;
  analytics: AnalyticsObject;
}
