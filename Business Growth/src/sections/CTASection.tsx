import type { ReactNode } from 'react';
import { Section } from '../components/common/Section';
import { CTABanner } from '../components/marketing/CTABanner';
import type { CtaLink } from '../components/marketing/Hero';

interface CTASectionProps {
  heading: string;
  text?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  variant?: 'light' | 'dark';
  /** Alternate content (e.g. LeadCTA/InquiryCTA) when a raw banner is not wanted. */
  children?: ReactNode;
}

/**
 * Conversion section band (03 §15, §31, 04 §11). Renders the CTABanner, or a
 * supplied conversion composition, inside a Section.
 */
export function CTASection({ heading, text, primaryCta, secondaryCta, variant = 'dark', children }: CTASectionProps) {
  if (!children && !primaryCta && !secondaryCta) {
    return null;
  }
  return <Section>{children ?? <CTABanner heading={heading} text={text} primaryCta={primaryCta} secondaryCta={secondaryCta} variant={variant} />}</Section>;
}