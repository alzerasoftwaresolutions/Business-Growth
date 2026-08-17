import type { PackageConfigs } from '../types';
import type { Stat, CertificationSummary, LocationSummary } from '../components/types';

/**
 * Pure resolvers that map the authoritative business configuration into Home
 * template sections. Every value comes from configuration — no invented
 * content, claims or figures. Sections return `undefined`/empty when the client
 * has not supplied content, so the template renders only what exists.
 */

export interface HomeHeroContent {
  headline: string;
  subheadline?: string;
}

export function resolveHomeHero(configs: PackageConfigs): HomeHeroContent | undefined {
  const business = configs.business.business;
  const headline = configs.business.branding.brandName || business.displayName || business.legalName;
  if (!headline) {
    return undefined;
  }
  return { headline, subheadline: business.tagline || undefined };
}

export function resolveHomeStats(configs: PackageConfigs): Stat[] {
  const metrics = configs.business.businessMetrics;
  const stats: Stat[] = [];
  if (metrics.yearsOfExperience != null) {
    stats.push({ label: 'Years of experience', value: String(metrics.yearsOfExperience) });
  }
  if (metrics.projectsCompleted != null) {
    stats.push({ label: 'Projects completed', value: String(metrics.projectsCompleted) });
  }
  if (metrics.clientsServed != null) {
    stats.push({ label: 'Clients served', value: String(metrics.clientsServed) });
  }
  if (metrics.employees != null) {
    stats.push({ label: 'Team members', value: String(metrics.employees) });
  }
  return stats;
}

export interface HomeAboutContent {
  eyebrow: string;
  title: string;
  description?: string;
}

export function resolveHomeAbout(configs: PackageConfigs): HomeAboutContent | undefined {
  const business = configs.business.business;
  const description = business.companyStory || business.companyProfile.medium || business.companyProfile.short;
  if (!description) {
    return undefined;
  }
  return { eyebrow: 'About us', title: 'Who we are', description };
}

export function resolveHomeCertifications(configs: PackageConfigs): CertificationSummary[] {
  return configs.business.credentials.certifications
    .filter((certification) => certification.name.trim().length > 0)
    .map((certification) => ({
      name: certification.name,
      issuer: certification.issuer || undefined,
      verificationUrl: certification.document || undefined,
    }));
}

export function resolveHomeLocations(configs: PackageConfigs): LocationSummary[] {
  return configs.business.locations
    .filter((location) => location.name.trim().length > 0)
    .map((location) => ({
      name: location.name,
      address: location.address.street || undefined,
      city: location.address.city || undefined,
      region: location.address.region || undefined,
      country: location.address.country || undefined,
      phone: location.phone || undefined,
      email: location.email || undefined,
      mapUrl: location.googleMapsUrl || undefined,
    }));
}

export interface HomeCtaContent {
  heading: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function resolveHomeCta(configs: PackageConfigs): HomeCtaContent | undefined {
  const cta = configs.contact.callToAction;
  const primary = cta.primary.enabled && cta.primary.label ? { label: cta.primary.label, href: cta.primary.href } : undefined;
  const secondary = cta.secondary.enabled && cta.secondary.label ? { label: cta.secondary.label, href: cta.secondary.href } : undefined;
  if (!primary && !secondary) {
    return undefined;
  }
  return { heading: 'Get in touch', primaryCta: primary, secondaryCta: secondary };
}