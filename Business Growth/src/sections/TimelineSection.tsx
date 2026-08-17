import { Section } from '../components/common/Section';
import { SectionHeader } from '../components/common/SectionHeader';
import { Timeline } from '../components/common/Timeline';
import type { TimelineItem } from '../components/types';

interface TimelineSectionProps {
  eyebrow?: string;
  title?: string;
  supportingText?: string;
  items: TimelineItem[];
}

/**
 * Company timeline band (03 §18, 04 §41). Renders nothing when no verified
 * timeline content exists.
 */
export function TimelineSection({ eyebrow, title, supportingText, items }: TimelineSectionProps) {
  if (items.length === 0) {
    return null;
  }
  return (
    <Section>
      {title || supportingText || eyebrow ? <SectionHeader eyebrow={eyebrow} heading={title ?? ''} supportingText={supportingText} /> : null}
      <div className="mt-8 max-w-3xl">
        <Timeline items={items} />
      </div>
    </Section>
  );
}