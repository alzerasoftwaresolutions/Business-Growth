import type { ReactNode } from 'react';
import { Section } from '../components/common/Section';
import { SectionHeader } from '../components/common/SectionHeader';
import { LeadCTA } from '../components/leads/LeadCTA';

interface FormSectionProps {
  heading: string;
  text?: string;
  children: ReactNode;
}

/**
 * Lead-capture band (06 §9-§10, 03 §15): SectionHeader + LeadCTA hosting the
 * ContactForm or RFQForm. Content is caller-supplied.
 */
export function FormSection({ heading, text, children }: FormSectionProps) {
  return (
    <Section>
      <SectionHeader heading={heading} supportingText={text} />
      <div className="mt-8">
        <LeadCTA heading={heading} text={text}>
          {children}
        </LeadCTA>
      </div>
    </Section>
  );
}