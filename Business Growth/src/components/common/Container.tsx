import type { ElementType, ReactNode } from 'react';

export type ContainerSize = 'default' | 'wide' | 'narrow';

const SIZE_CLASSES: Record<ContainerSize, string> = {
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  narrow: 'max-w-3xl',
};

interface ContainerProps {
  as?: ElementType;
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

/**
 * Horizontal layout container — maximum content width + responsive padding
 * (04 §7). Widths are template-level constants; per-client values come from
 * the approved UI/design manual, never from client-neutral code.
 */
export function Container({ as: Tag = 'div', size = 'default', className = '', children }: ContainerProps) {
  const classes = ['mx-auto w-full px-4 sm:px-6', SIZE_CLASSES[size], className].join(' ');
  return <Tag className={classes}>{children}</Tag>;
}