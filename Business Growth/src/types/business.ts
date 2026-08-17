/** Mirror of `configuration/business.config.json`. */

export interface BusinessProfile {
  short: string;
  medium: string;
  long: string;
}

export interface BusinessIdentity {
  legalName: string;
  displayName: string;
  shortName: string;
  tagline: string;
  description: string;
  industry: string;
  subIndustry: string;
  businessType: string;
  yearEstablished: number | null;
  mission: string;
  vision: string;
  values: string[];
  companyStory: string;
  leadershipMessage: string;
  companyProfile: BusinessProfile;
}

export interface BusinessBrandLogo {
  primary: string;
  secondary: string;
  monochrome: string;
  favicon: string;
}

export interface BusinessBrandAssets {
  guidelines: string;
  companyProfilePdf: string;
  brochure: string;
}

export interface BusinessBranding {
  brandName: string;
  logo: BusinessBrandLogo;
  brandAssets: BusinessBrandAssets;
}

export interface BusinessPhysicalAddress {
  street: string;
  city: string;
  region: string;
  country: string;
  postalCode: string;
}

export interface BusinessCoordinates {
  latitude: number | null;
  longitude: number | null;
}

export interface BusinessContact {
  primaryEmail: string;
  secondaryEmail: string;
  phoneNumbers: string[];
  whatsappNumbers: string[];
  fax: string;
  website: string;
  physicalAddress: BusinessPhysicalAddress;
  poBox: string;
  googleMapsUrl: string;
  coordinates: BusinessCoordinates;
}

export interface BusinessDay {
  enabled: boolean;
  open: string;
  close: string;
}

export interface BusinessHoursSchedule {
  monday: BusinessDay;
  tuesday: BusinessDay;
  wednesday: BusinessDay;
  thursday: BusinessDay;
  friday: BusinessDay;
  saturday: BusinessDay;
  sunday: BusinessDay;
}

export interface BusinessHours {
  timezone: string;
  schedule: BusinessHoursSchedule;
}

export interface BusinessSocialMedia {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  x: string;
  telegram: string;
}

export interface BusinessLocationHours {
  timezone: string;
  schedule: Record<string, BusinessDay>;
}

export interface BusinessLocation {
  id: string;
  name: string;
  type: string;
  address: BusinessPhysicalAddress;
  phone: string;
  email: string;
  googleMapsUrl: string;
  coordinates: BusinessCoordinates;
  businessHours: BusinessLocationHours;
}

export interface BusinessTeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  shortBio: string;
  photo: string;
  email: string;
  linkedin: string;
}

export interface BusinessCompanyStructure {
  departments: string[];
  teamMembers: BusinessTeamMember[];
}

export interface BusinessCertification {
  id: string;
  name: string;
  issuer: string;
  certificateNumber: string;
  issueDate: string;
  expiryDate: string;
  document: string;
  logo: string;
}

export interface BusinessAward {
  id: string;
  name: string;
  issuer: string;
  year: string;
  description: string;
}

export interface BusinessMembership {
  id: string;
  organization: string;
  membershipType: string;
  memberSince: string;
  logo: string;
}

export interface BusinessCredentials {
  certifications: BusinessCertification[];
  awards: BusinessAward[];
  memberships: BusinessMembership[];
}

export interface BusinessRelationship {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
}

export interface BusinessRelationships {
  clients: BusinessRelationship[];
  partners: BusinessRelationship[];
}

export interface BusinessMetrics {
  yearsOfExperience: number | null;
  projectsCompleted: number | null;
  clientsServed: number | null;
  employees: number | null;
  locationsCount: number | null;
  countriesServed: number | null;
  otherMetrics: string[];
}

export interface BusinessLegal {
  registrationNumber: string;
  taxIdentificationNumber: string;
  privacyPolicyUrl: string;
  termsUrl: string;
  cookiePolicyUrl: string;
}

export interface BusinessContentRules {
  clientProvidedInformationIsAuthoritative: boolean;
  doNotInventBusinessInformation: boolean;
  doNotInventStatistics: boolean;
  doNotInventCertifications: boolean;
  doNotInventClients: boolean;
  doNotInventAwards: boolean;
  doNotInventLocations: boolean;
}

export interface BusinessConfig {
  $schema?: string;
  business: BusinessIdentity;
  branding: BusinessBranding;
  contact: BusinessContact;
  businessHours: BusinessHours;
  socialMedia: BusinessSocialMedia;
  locations: BusinessLocation[];
  companyStructure: BusinessCompanyStructure;
  credentials: BusinessCredentials;
  relationships: BusinessRelationships;
  businessMetrics: BusinessMetrics;
  legal: BusinessLegal;
  contentRules: BusinessContentRules;
}
