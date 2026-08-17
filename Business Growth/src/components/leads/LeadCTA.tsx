import type { ReactNode } from 'react';

interface LeadCTAProps {
  heading: string;
  text?: string;
  /** Form slot — defaults to the ContactForm. */
  children?: ReactNode;
}

/**
 * Lead-capture section wrapper (06 §9-§10; 04 §47). Hosts the contact/RFQ
 * form inside a structured band. Content is caller-supplied; nothing about the
 * client is assumed.
 */
export function LeadCTA({ heading, text, children }: LeadCTAProps) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-start">
        <div className="flex flex-col gap-3 lg:w-2/5">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{heading}</h2>
          {text ? <p className="text-base text-slate-600">{text}</p> : null}
        </div>
        <div className="lg:w-3/5">{children}</div>
      </div>
    </section>
  );
}