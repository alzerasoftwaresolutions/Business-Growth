import type { ReactNode } from 'react';
import { Breadcrumbs } from '../components/navigation/Breadcrumbs';
import type { BreadcrumbItem } from '../components/types';

interface PageLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

/**
 * Single-column content layout shared by content pages. Provides the content
 * column width and optional breadcrumbs; pages decide their own sections.
 */
export function PageLayout({ children, breadcrumbs, className = '' }: PageLayoutProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 py-12 md:py-16 ${className}`}>
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      ) : null}
      {children}
    </div>
  );
}