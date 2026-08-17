import type { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Small uppercase eyebrow label (02 §50). */
  eyebrow?: string;
  heading: string;
  supportingText?: string;
  /** Optional trailing CTA slot (e.g. a Button/LeadCTA). */
  action?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Reusable section heading structure: eyebrow → heading → supporting text →
 * optional CTA (04 §9). Content-driven; no client styling assumptions.
 */
export function SectionHeader({ eyebrow, heading, supportingText, action, align = 'left', className = '' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{heading}</h2>
      {supportingText ? <p className="max-w-2xl text-base text-slate-600">{supportingText}</p> : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}