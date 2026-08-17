import type { ElementType, ReactNode } from 'react';

export type SectionVariant = 'default' | 'muted' | 'dark';

const VARIANT_CLASSES: Record<SectionVariant, string> = {
  default: 'bg-transparent',
  muted: 'bg-slate-50',
  dark: 'bg-slate-900 text-white',
};

interface SectionProps {
  as?: ElementType;
  variant?: SectionVariant;
  /** Anchors the section for in-page navigation. */
  id?: string;
  /** Adds vertical spacing rhythm (desktop 96–144px, mobile 64–96px per 02 §10). */
  spaced?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * Vertical section wrapper with background variants (04 §8). Only the
 * neutral variants the template actually needs are implemented; brand-heavy
 * variants belong to the approved client UI.
 */
export function Section({
  as: Tag = 'section',
  variant = 'default',
  id,
  spaced = true,
  className = '',
  children,
}: SectionProps) {
  const classes = [
    VARIANT_CLASSES[variant],
    spaced ? 'py-16 md:py-24' : 'py-0',
    className,
  ].join(' ');
  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  );
}