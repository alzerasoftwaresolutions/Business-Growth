import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface PreFooterProps {
  heading: string;
  subtext: string;
  ctaLabel?: string;
  ctaTo?: string;
  ctaVariant?: 'gold' | 'primary' | 'secondary';
  variant?: 'light' | 'dark';
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function PreFooter({
  heading,
  subtext,
  ctaLabel = 'Request Consultation',
  ctaTo = '/contact',
  ctaVariant = 'gold',
  variant = 'dark',
  secondaryLabel,
  secondaryTo,
}: PreFooterProps) {
  const isLight = variant === 'light';

  return (
    <section className={isLight ? 'border-b border-border-light bg-surface' : 'bg-navy-950 text-white'}>
      <div className="container-site py-16 text-center">
        <h2
          className={`mx-auto max-w-3xl font-sans text-2xl font-bold uppercase tracking-wide sm:text-3xl lg:text-4xl ${
            isLight ? 'text-navy-950' : 'text-white'
          }`}
        >
          {heading}
        </h2>
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            isLight ? 'text-slate-600' : 'text-white/70'
          }`}
        >
          {subtext}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to={ctaTo} variant={ctaVariant}>
            {ctaLabel}
          </Button>
          {secondaryLabel && secondaryTo ? (
            <Link
              to={secondaryTo}
              className={`inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-[0.05em] underline underline-offset-4 transition-colors ${
                isLight
                  ? 'text-navy-950 hover:text-gold-600'
                  : 'text-white hover:text-gold-500'
              }`}
            >
              {secondaryLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}