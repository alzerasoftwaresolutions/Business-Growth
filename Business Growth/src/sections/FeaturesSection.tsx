import { Section } from '../components/common/Section';
import { SectionHeader } from '../components/common/SectionHeader';
import { FeatureList } from '../components/data-display/FeatureList';
import type { Feature } from '../components/types';

interface FeaturesSectionProps {
  eyebrow?: string;
  title?: string;
  supportingText?: string;
  features: Feature[];
}

/**
 * Feature band (04 §33, §36, §76). Renders nothing when no feature content
 * exists — optional content never produces an empty section.
 */
export function FeaturesSection({ eyebrow, title, supportingText, features }: FeaturesSectionProps) {
  if (features.length === 0) {
    return null;
  }
  return (
    <Section>
      {title || supportingText || eyebrow ? <SectionHeader eyebrow={eyebrow} heading={title ?? ''} supportingText={supportingText} /> : null}
      <div className="mt-8 max-w-3xl">
        <FeatureList features={features} />
      </div>
    </Section>
  );
}