import type { ReactNode } from 'react';
import { Grid, type GridColumns } from '../common/Grid';

interface CardGridProps {
  columns?: GridColumns;
  children: ReactNode;
}

/**
 * Responsive card collection wrapper (04 §26, §32). Delegates to the common
 * Grid; responsive stacking is handled centrally.
 */
export function CardGrid({ columns = 3, children }: CardGridProps) {
  return <Grid columns={columns}>{children}</Grid>;
}