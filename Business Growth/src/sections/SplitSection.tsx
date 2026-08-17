import type { ReactNode } from 'react';
import { Section } from '../components/common/Section';
import { FeaturedContent } from '../components/marketing/FeaturedContent';
import type { MediaImage } from '../components/types';

interface SplitSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: MediaImage;
  /** Reusable action slot (e.g. Button, LeadCTA). */
  action?: ReactNode;
  /** When true, the image renders on the opposite side (desktop). */
  flip?: boolean;
}

/**
 * Split feature band (04 §9, §46): a full-width section hosting the
 * FeaturedContent composition. All content is caller-supplied.
 */
export function SplitSection({ eyebrow, title, description, image, action, flip }: SplitSectionProps) {
  return (
    <Section>
      <FeaturedContent eyebrow={eyebrow} title={title} description={description} image={image} action={action} flip={flip} />
    </Section>
  );
}