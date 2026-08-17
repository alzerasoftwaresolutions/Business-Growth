import type { MediaImage } from '../types';
import { Button } from '../common/Button';

export interface CtaLink {
  label: string;
  href: string;
}

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  image?: MediaImage;
  align?: 'left' | 'center';
  /** Dark variant for high-contrast hero bands (02 §12). */
  variant?: 'light' | 'dark';
}

/**
 * Page hero (03 §26, 04 §5). Content-driven headline + optional CTAs and
 * visual. Purely presentational structure — no client branding is assumed.
 */
export function Hero({ eyebrow, headline, subheadline, primaryCta, secondaryCta, image, align = 'left', variant = 'light' }: HeroProps) {
  const centered = align === 'center';
  const isDark = variant === 'dark';
  return (
    <section className={isDark ? 'bg-slate-900 text-slate-50' : 'bg-slate-50 text-slate-900'}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:py-24 lg:flex-row lg:items-center">
        <div className={`flex flex-1 flex-col gap-6 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
          {eyebrow ? (
            <p className={`text-xs font-semibold uppercase tracking-widest ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{headline}</h1>
          {subheadline ? (
            <p className={`max-w-2xl text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{subheadline}</p>
          ) : null}
          {primaryCta || secondaryCta ? (
            <div className="flex flex-wrap gap-3">
              {primaryCta ? <Button href={primaryCta.href} variant={isDark ? 'primary' : 'primary'}>{primaryCta.label}</Button> : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant={isDark ? 'outline' : 'secondary'}>
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
        {image ? (
          <div className="flex-1">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="eager"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}