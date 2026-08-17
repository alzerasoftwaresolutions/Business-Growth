import type { CtaLink } from '../marketing/Hero';
import { Button } from '../common/Button';

interface InquiryCTAProps {
  heading: string;
  text?: string;
  /** Primary path to the contact flow (page route or external link). */
  cta: CtaLink;
  secondaryCta?: CtaLink;
}

/**
 * Conversion block for "get in touch" moments (04 §50). Points to the
 * approved contact/RFQ route; the route itself is never invented here.
 */
export function InquiryCTA({ heading, text, cta, secondaryCta }: InquiryCTAProps) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-md border border-slate-200 bg-white p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{heading}</h2>
        {text ? <p className="text-base text-slate-600">{text}</p> : null}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button href={cta.href}>{cta.label}</Button>
        {secondaryCta ? <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button> : null}
      </div>
    </div>
  );
}