import type { PackageConfigs } from '../types';
import type { BusinessHours } from '../types/business';

/**
 * Pure resolvers that translate the authoritative configuration into footer
 * content. Nothing is invented: values are shown only when the client has
 * configured them (contact.config.json / business.config.json).
 */

export interface FooterContactContent {
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
}

const DAY_LABELS: Record<string, string> = {
  monday: 'Mon',
  tuesday: 'Tue',
  wednesday: 'Wed',
  thursday: 'Thu',
  friday: 'Fri',
  saturday: 'Sat',
  sunday: 'Sun',
};

/** Formats configured opening hours into a compact single line. */
export function formatBusinessHours(hours: BusinessHours): string | undefined {
  const lines = (Object.keys(DAY_LABELS) as (keyof BusinessHours['schedule'])[])
    .map((day) => {
      const slot = hours.schedule[day];
      if (!slot || !slot.enabled || !slot.open || !slot.close) {
        return null;
      }
      return `${DAY_LABELS[day]}: ${slot.open}–${slot.close}`;
    })
    .filter((line): line is string => line !== null);
  return lines.length > 0 ? lines.join(' · ') : undefined;
}

/** Resolves the contact details the footer may display, per config flags. */
export function resolveFooterContact(configs: PackageConfigs): FooterContactContent {
  const { footer } = configs.navigation;
  const business = configs.business;

  let address: string | undefined;
  if (footer.contact.showAddress) {
    const parts = [business.contact.physicalAddress.street, business.contact.physicalAddress.city, business.contact.physicalAddress.region]
      .filter(Boolean);
    address = parts.length > 0 ? parts.join(', ') : undefined;
  }

  return {
    phone: footer.contact.showPhone && business.contact.phoneNumbers[0] ? business.contact.phoneNumbers[0] : undefined,
    email: footer.contact.showEmail && business.contact.primaryEmail ? business.contact.primaryEmail : undefined,
    address,
    hours: footer.contact.showBusinessHours ? formatBusinessHours(business.businessHours) : undefined,
  };
}

/** Resolves configured social profiles for the footer's enabled platforms. */
export function resolveFooterSocialLinks(configs: PackageConfigs): { platform: string; label: string; url: string }[] {
  const { footer } = configs.navigation;
  const social = configs.business.socialMedia;
  if (!footer.social.enabled) {
    return [];
  }
  return footer.social.platforms
    .map((platform) => {
      const url = (social as unknown as Record<string, string>)[platform];
      return url ? { platform, label: platform.charAt(0).toUpperCase() + platform.slice(1), url } : null;
    })
    .filter((entry): entry is { platform: string; label: string; url: string } => entry !== null);
}