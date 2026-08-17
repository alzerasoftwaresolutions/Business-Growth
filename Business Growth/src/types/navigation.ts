/** Mirror of `configuration/navigation.config.json` (top-level sections). */

export interface NavigationItem {
  id?: string;
  label: string;
  href: string;
  type?: string;
  enabled?: boolean;
  description?: string;
  children?: NavigationItem[];
}

export interface NavigationHeaderBehavior {
  sticky: boolean;
  hideOnScroll: boolean;
  transparentOnHero: boolean;
}

export interface NavigationLogo {
  enabled: boolean;
  target: string;
}

export interface NavigationHeaderCta {
  enabled: boolean;
  label: string;
  href: string;
  type?: string;
}

export interface NavigationHeader {
  enabled: boolean;
  behavior: NavigationHeaderBehavior;
  logo: NavigationLogo;
  primary: NavigationItem[];
  cta: NavigationHeaderCta;
}

export interface NavigationMobileMenu {
  type: string;
  position: string;
  closeOnNavigation: boolean;
}

export interface NavigationMobileCta {
  enabled: boolean;
  label: string;
  href: string;
}

export interface NavigationMobile {
  enabled: boolean;
  menu: NavigationMobileMenu;
  primary: NavigationItem[];
  cta: NavigationMobileCta;
}

export interface NavigationSecondary {
  enabled: boolean;
  items: NavigationItem[];
}

/** The `navigation` section contains header, mobile and secondary only. */
export interface NavigationObject {
  header: NavigationHeader;
  mobile: NavigationMobile;
  secondary: NavigationSecondary;
}

export interface NavigationDropdownViewAll {
  enabled: boolean;
  label: string;
  href: string;
}

export interface NavigationDropdown {
  enabled: boolean;
  label: string;
  type: string;
  items: NavigationItem[];
  viewAll?: NavigationDropdownViewAll;
}

export interface NavigationDropdowns {
  services: NavigationDropdown;
  products: NavigationDropdown;
  projects: NavigationDropdown;
}

export interface NavigationFooterItem {
  label: string;
  href: string;
  enabled: boolean;
}

export interface NavigationFooterColumn {
  id: string;
  title: string;
  items: NavigationFooterItem[];
}

export interface NavigationFooterContact {
  enabled: boolean;
  showPhone: boolean;
  showEmail: boolean;
  showAddress: boolean;
  showBusinessHours: boolean;
}

export interface NavigationFooterSocial {
  enabled: boolean;
  platforms: string[];
}

export interface NavigationFooterLegal {
  enabled: boolean;
  items: NavigationFooterItem[];
}

export interface NavigationFooter {
  enabled: boolean;
  columns: NavigationFooterColumn[];
  contact: NavigationFooterContact;
  social: NavigationFooterSocial;
  legal: NavigationFooterLegal;
}

export interface NavigationBreadcrumbs {
  enabled: boolean;
  homeLabel: string;
  separator: string;
  showOn: string[];
}

export interface NavigationUtility {
  enabled: boolean;
  items: NavigationItem[];
}

export interface NavigationRedirect {
  from: string;
  to: string;
}

export interface NavigationRules {
  respectFeatureConfiguration: boolean;
  hideDisabledFeatures: boolean;
  hideDisabledPages: boolean;
  preventBrokenLinks: boolean;
  preventLinksToDisabledFeatures: boolean;
  preserveLogicalHierarchy: boolean;
  mobileAndDesktopMustRemainConsistent: boolean;
  allowDifferentMobileOrdering: boolean;
  allowClientSpecificLabels: boolean;
  allowExternalLinks: boolean;
  externalLinksOpenInNewTab: boolean;
}

export interface NavigationAccessibility {
  keyboardNavigation: boolean;
  ariaLabelsRequired: boolean;
  currentPageIndicator: boolean;
  focusVisible: boolean;
  skipToContent: boolean;
}

export interface NavigationConfig {
  $schema?: string;
  navigation: NavigationObject;
  dropdowns: NavigationDropdowns;
  footer: NavigationFooter;
  breadcrumbs: NavigationBreadcrumbs;
  utilityNavigation: NavigationUtility;
  navigationRules: NavigationRules;
  externalLinks: NavigationItem[];
  redirects: NavigationRedirect[];
  accessibility: NavigationAccessibility;
}
