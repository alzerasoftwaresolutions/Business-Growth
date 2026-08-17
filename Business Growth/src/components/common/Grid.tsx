import type { ElementType, ReactNode } from 'react';

export type GridColumns = 1 | 2 | 3 | 4;

const COLUMN_CLASSES: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

interface GridProps {
  as?: ElementType;
  /** Desktop column count; stacks to one column on small screens. */
  columns?: GridColumns;
  className?: string;
  children: ReactNode;
}

/**
 * Responsive content grid (04 §10). Responsive stacking is built in; the
 * component contains no business logic.
 */
export function Grid({ as: Tag = 'div', columns = 3, className = '', children }: GridProps) {
  const classes = ['grid gap-6', COLUMN_CLASSES[columns], className].join(' ');
  return <Tag className={classes}>{children}</Tag>;
}