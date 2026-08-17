import { Section } from '../components/common/Section';
import { SectionHeader } from '../components/common/SectionHeader';
import { StatGrid } from '../components/common/StatGrid';
import type { Stat } from '../components/types';

interface StatsSectionProps {
  eyebrow?: string;
  title?: string;
  supportingText?: string;
  stats: Stat[];
}

/**
 * Company statistics band (03 §18, 04 §40). Renders only verified content from
 * configuration; an empty stats array renders nothing at all.
 */
export function StatsSection({ eyebrow, title, supportingText, stats }: StatsSectionProps) {
  if (stats.length === 0) {
    return null;
  }
  return (
    <Section variant="muted">
      {title || supportingText || eyebrow ? <SectionHeader eyebrow={eyebrow} heading={title ?? ''} supportingText={supportingText} /> : null}
      <div className="mt-8">
        <StatGrid stats={stats} />
      </div>
    </Section>
  );
}