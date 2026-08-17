import { Button } from '../common/Button';
import type { CtaLink } from './Hero';

interface CTABannerProps {
  heading: string;
  text?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  /** Dark band for end-of-page conversion moments (02 §12). */
  variant?: 'light' | 'dark';
}

/**
 * Conversion band (04 §11, §66). Calls-to-action are wired through the same
 * `leads`/config boundaries as all contact flows — never a fabricated mailto.
 */
export function CTABanner({ heading, text, primaryCta, secondaryCta, variant = 'dark' }: CTABannerProps) {
  const isDark = variant === 'dark';
  return (
    <section className={isDark ? 'bg-slate-900 text-slate-50' : 'bg-slate-50 text-slate-900'}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">{heading}</h2>
        {text ? <p className={`max-w-2xl text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p> : null}
        {primaryCta || secondaryCta ? (
          <div className="flex flex-wrap justify-center gap-3">
            {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
            {secondaryCta ? <Button href={secondaryCta.href} variant={isDark ? 'outline' : 'secondary'}>{secondaryCta.label}</Button> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}