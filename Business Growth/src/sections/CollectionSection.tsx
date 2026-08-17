import type { ReactNode } from 'react';
import { Section } from '../components/common/Section';
import { SectionHeader } from '../components/common/SectionHeader';
import { Grid, type GridColumns } from '../components/common/Grid';
import { EmptyState } from '../components/feedback/EmptyState';

interface CollectionSectionProps {
  eyebrow?: string;
  title?: string;
  supportingText?: string;
  columns?: GridColumns;
  children: ReactNode;
  /** When true, renders the intentional empty state instead of the grid. */
  isEmpty?: boolean;
  emptyState?: { title: string; description?: string };
}

/**
 * Reusable content collection band: heading + responsive grid (04 §10, §26).
 * Used by home previews and related-content sections on detail pages. Renders
 * an intentional empty state when the caller reports an empty collection.
 */
export function CollectionSection({ eyebrow, title, supportingText, columns = 3, children, isEmpty = false, emptyState }: CollectionSectionProps) {
  return (
    <Section>
      {title || supportingText || eyebrow ? <SectionHeader eyebrow={eyebrow} heading={title ?? ''} supportingText={supportingText} /> : null}
      <div className="mt-8">
        {isEmpty && emptyState ? (
          <EmptyState title={emptyState.title} description={emptyState.description} />
        ) : (
          <Grid columns={columns}>{children}</Grid>
        )}
      </div>
    </Section>
  );
}