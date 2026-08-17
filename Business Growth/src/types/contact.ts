/** Mirror of `configuration/contact.config.json` (top-level sections). */

export interface ContactPrimary {
  email: string;
  phone: string;
  whatsapp: string;
}

export interface ContactChannelEmail {
  enabled: boolean;
  address: string;
  displayLabel: string;
  subjectPrefix: string;
  defaultSubject: string;
  openInNewTab: boolean;
}

export interface ContactChannelPhone {
  enabled: boolean;
  number: string;
  displayLabel: string;
  clickToCall: boolean;
}

export interface ContactChannelWhatsapp {
  enabled: boolean;
  number: string;
  displayLabel: string;
  defaultMessage: string;
  prefillMessage: boolean;
}

export interface ContactChannelGoogleMaps {
  enabled: boolean;
  url: string;
  embedUrl: string;
  showDirections: boolean;
}

export interface ContactChannelSocialMedia {
  enabled: boolean;
  platforms: string[];
}

export interface ContactChannels {
  email: ContactChannelEmail;
  phone: ContactChannelPhone;
  whatsapp: ContactChannelWhatsapp;
  googleMaps: ContactChannelGoogleMaps;
  socialMedia: ContactChannelSocialMedia;
}

export interface ContactPageConfig {
  enabled: boolean;
  route: string;
  title: string;
  intro: string;
  showContactForm: boolean;
  showPhone: boolean;
  showEmail: boolean;
  showWhatsApp: boolean;
  showAddress: boolean;
  showBusinessHours: boolean;
  showMap: boolean;
  showSocialMedia: boolean;
  showDirections: boolean;
}

/** The `contact` section contains enabled, primaryContact, channels, contactPage. */
export interface ContactSection {
  enabled: boolean;
  primaryContact: ContactPrimary;
  channels: ContactChannels;
  contactPage: ContactPageConfig;
}

export type FormFieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'textarea'
  | 'select'
  | 'file';

export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: FormFieldType;
  required: boolean;
  enabled: boolean;
  placeholder?: string;
  autocomplete?: string;
  optionsSource?: string;
  options?: FormFieldOption[];
  minimum?: number;
  acceptedTypes?: string[];
  maxFileSizeMB?: number;
  multiple?: boolean;
}

export interface SpamProtection {
  enabled: boolean;
  honeypot: boolean;
  rateLimiting: boolean;
  recaptcha: {
    enabled: boolean;
    provider: string;
    siteKey: string;
  };
}

/** Keys differ slightly between the contact form and the RFQ form. */
export interface FormValidation {
  clientSide: boolean;
  serverSide: boolean;
  trimWhitespace?: boolean;
  normalizeEmail?: boolean;
  preventEmptySubmission?: boolean;
  requiredFieldsMustBeCompleted?: boolean;
  sanitizeInput?: boolean;
}

export interface FormPrivacy {
  privacyNoticeEnabled: boolean;
  privacyPolicyRequired: boolean;
  consentRequired: boolean;
  consentText: string;
}

export interface ContactFormConfig {
  enabled: boolean;
  formId: string;
  title: string;
  description: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  loadingMessage: string;
  fields: FormField[];
  spamProtection: SpamProtection;
  validation: FormValidation;
  privacy: FormPrivacy;
}

export interface RfqConfig {
  enabled: boolean;
  route: string;
  title: string;
  intro: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  loadingMessage: string;
  fields: FormField[];
  spamProtection: SpamProtection;
  validation: FormValidation;
  privacy: FormPrivacy;
}

export interface LeadRoutingDestination {
  destinationType: string;
  destination: string;
  subject: string;
}

export interface LeadRoutingNotificationEmail {
  enabled: boolean;
  recipients: string[];
}

export interface LeadRoutingNotificationWhatsapp {
  enabled: boolean;
  number: string;
}

export interface LeadRoutingNotification {
  enabled: boolean;
  email: LeadRoutingNotificationEmail;
  whatsapp: LeadRoutingNotificationWhatsapp;
}

export interface LeadRouting {
  enabled: boolean;
  contactForm: LeadRoutingDestination;
  rfq: LeadRoutingDestination;
  notification: LeadRoutingNotification;
}

export interface LeadTrackingEvents {
  contactFormStarted: boolean;
  contactFormSubmitted: boolean;
  contactFormFailed: boolean;
  rfqStarted: boolean;
  rfqSubmitted: boolean;
  rfqFailed: boolean;
  phoneClicked: boolean;
  emailClicked: boolean;
  whatsappClicked: boolean;
  mapClicked: boolean;
}

export interface LeadTracking {
  enabled: boolean;
  events: LeadTrackingEvents;
}

export interface ContactCallToAction {
  primary: {
    enabled: boolean;
    label: string;
    href: string;
  };
  secondary: {
    enabled: boolean;
    label: string;
    href: string;
  };
}

export interface ContactAccessibility {
  labelsRequired: boolean;
  errorMessagesMustBeAssociatedWithFields: boolean;
  keyboardAccessible: boolean;
  focusManagement: boolean;
  successMessageAnnounced: boolean;
  errorMessageAnnounced: boolean;
}

export interface ContactRules {
  doNotInventContactInformation: boolean;
  doNotInventFormRecipients: boolean;
  doNotCollectUnapprovedPersonalInformation: boolean;
  doNotExposePrivateLeadDataPublicly: boolean;
  doNotSendLeadDataToUnapprovedServices: boolean;
  validateAllUserInput: boolean;
  sanitizeAllSubmittedData: boolean;
  respectFeatureConfiguration: boolean;
}

export interface ContactConfig {
  $schema?: string;
  contact: ContactSection;
  contactForm: ContactFormConfig;
  rfq: RfqConfig;
  leadRouting: LeadRouting;
  leadTracking: LeadTracking;
  callToAction: ContactCallToAction;
  accessibility: ContactAccessibility;
  rules: ContactRules;
}
