import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { isExternalHref } from './navigation';

interface SiteLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaCurrent?: 'page' | undefined;
  openInNewTab?: boolean;
}

/**
 * Route-aware link used across the site chrome. Internal hrefs render as
 * react-router links (no full reloads); external/mailto/tel hrefs render as
 * anchors with a new-tab target when the config requires it.
 */
export function SiteLink({ href, children, className, ariaCurrent, openInNewTab = false }: SiteLinkProps) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        aria-current={ariaCurrent}
        {...(openInNewTab ? { target: '_blank', rel: 'noreferrer noopener' } : null)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} aria-current={ariaCurrent}>
      {children}
    </Link>
  );
}