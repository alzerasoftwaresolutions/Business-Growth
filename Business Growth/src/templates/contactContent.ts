import type { PackageConfigs } from '../types';
import { formatBusinessHours } from '../site/footerContent';

/**
 * Pure resolvers for the Contact template. Every value comes from the
 * authoritative contact/business configuration; a missing or disabled channel
 * is omitted rather than shown empty (06 §15-§16).
 */

export interface ResolvedContactChannel {
  type: 'phone' | 'email' | 'whatsapp';
  label: string;
  href: string;
}

export function buildWhatsAppHref(number: string, message?: string): string {
  const digits = number.replace(/[^\d]/g, '');
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export interface ContactChannelsResult {
  channels: ResolvedContactChannel[];
  address?: string;
  businessHours?: string;
  mapUrl?: string;
}

export function resolveContactChannels(configs: PackageConfigs): ContactChannelsResult {
  const contact = configs.contact.contact;
  const page = contact.contactPage;
  const channels: ResolvedContactChannel[] = [];

  if (page.showPhone && contact.channels.phone.enabled && contact.channels.phone.number) {
    channels.push({ type: 'phone', label: contact.channels.phone.number, href: `tel:${contact.channels.phone.number}` });
  }
  if (page.showEmail && contact.channels.email.enabled && contact.channels.email.address) {
    channels.push({ type: 'email', label: contact.channels.email.address, href: `mailto:${contact.channels.email.address}` });
  }
  if (page.showWhatsApp && contact.channels.whatsapp.enabled && contact.channels.whatsapp.number) {
    channels.push({
      type: 'whatsapp',
      label: contact.channels.whatsapp.displayLabel || 'Chat on WhatsApp',
      href: buildWhatsAppHref(contact.channels.whatsapp.number, contact.channels.whatsapp.prefillMessage ? contact.channels.whatsapp.defaultMessage : undefined),
    });
  }

  let address: string | undefined;
  if (page.showAddress) {
    const primary = configs.business.locations[0];
    if (primary) {
      const parts = [primary.address.street, primary.address.city, primary.address.region, primary.address.country].filter(Boolean);
      address = parts.length > 0 ? parts.join(', ') : undefined;
    }
  }

  let businessHours: string | undefined;
  if (page.showBusinessHours) {
    businessHours = formatBusinessHours(configs.business.businessHours) || undefined;
  }

  let mapUrl: string | undefined;
  if (page.showMap && contact.channels.googleMaps.enabled && contact.channels.googleMaps.url) {
    mapUrl = contact.channels.googleMaps.url;
  }

  return { channels, address, businessHours, mapUrl };
}