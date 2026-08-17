import type { ElementType, ReactNode } from 'react';

interface AspectRatioProps {
  as?: ElementType;
  /** e.g. "16/9", "4/3", "1/1", "3/2". */
  ratio?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Reserves layout space for media to prevent layout shift (08 §83). Width is
 * controlled by the parent; the box keeps the requested aspect ratio.
 */
export function AspectRatio({ as: Tag = 'div', ratio = '16/9', className = '', children }: AspectRatioProps) {
  return (
    <Tag className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      {children}
    </Tag>
  );
}