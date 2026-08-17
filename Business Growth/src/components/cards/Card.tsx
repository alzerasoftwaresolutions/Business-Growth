import type { ElementType, ReactNode } from 'react';

interface CardProps {
  /** When set, the whole card becomes a link. */
  href?: string;
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Base content card (02 §20-§24, 04 §26). Neutral surface + border; composition
 * is handled by specialized cards. Optional whole-card link keeps cards
 * keyboard accessible without duplicating content.
 */
export function Card({ href, as: Tag = 'div', className = '', children }: CardProps) {
  const classes = [
    'group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white',
    href ? 'transition-shadow hover:shadow-md' : '',
    className,
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return <Tag className={classes}>{children}</Tag>;
}