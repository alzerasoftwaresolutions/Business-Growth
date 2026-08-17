import type { PackageConfigs } from '../types';
import type { CtaLink } from '../components/marketing/Hero';

/**
 * Resolves the configured conversion CTAs (contact.callToAction) for a
 * section. Returns `undefined` for disabled or unlabeled CTAs so sections
 * never render an empty action — no invented copy.
 */
export function resolveSectionCta(configs: PackageConfigs): { primaryCta?: CtaLink; secondaryCta?: CtaLink } {
  const cta = configs.contact.callToAction;
  return {
    primaryCta: cta.primary.enabled && cta.primary.label ? { label: cta.primary.label, href: cta.primary.href } : undefined,
    secondaryCta: cta.secondary.enabled && cta.secondary.label ? { label: cta.secondary.label, href: cta.secondary.href } : undefined,
  };
}