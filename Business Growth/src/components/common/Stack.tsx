import type { ElementType, ReactNode } from 'react';

interface StackProps {
  as?: ElementType;
  /** Vertical gap between children. */
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
}

const GAP_CLASSES = { sm: 'gap-4', md: 'gap-6', lg: 'gap-10' } as const;

/** Vertical stacking layout primitive (04 §6). */
export function Stack({ as: Tag = 'div', gap = 'md', className = '', children }: StackProps) {
  const classes = ['flex flex-col', GAP_CLASSES[gap], className].join(' ');
  return <Tag className={classes}>{children}</Tag>;
}