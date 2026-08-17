import type { ReactNode } from 'react';
import { PageLayout } from './PageLayout';
import type { BreadcrumbItem } from '../components/types';

interface ListingLayoutProps {
  breadcrumbs?: BreadcrumbItem[];
  /** Page heading — required (03 listing templates). */
  title: string;
  intro?: string;
  /** Category navigation (rendered only when provided). */
  categoryNav?: ReactNode;
  /** Filter/sort controls (rendered only when provided). */
  controls?: ReactNode;
  /** Result summary line (rendered only when provided). */
  summary?: ReactNode;
  /** Collection grid / list body. */
  children: ReactNode;
  /** Intentional empty state (rendered instead of the body when provided). */
  emptyState?: ReactNode;
  /** Pagination links (rendered only when provided). */
  pagination?: ReactNode;
}

/**
 * Reusable listing page structure (03 §21-§41, Phase 6 §12.1). Every optional
 * band renders only when the caller supplies it, so no section is forced and
 * no empty UI is created. The same layout serves products, services, projects,
 * blog, team, locations, testimonials and certifications.
 */
export function ListingLayout({
  breadcrumbs,
  title,
  intro,
  categoryNav,
  controls,
  summary,
  children,
  emptyState,
  pagination,
}: ListingLayoutProps) {
  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
        {intro ? <p className="mt-3 max-w-2xl text-base text-slate-600">{intro}</p> : null}
      </header>

      {categoryNav ? <div className="mb-8">{categoryNav}</div> : null}

      {controls || summary ? (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          {controls}
          {summary}
        </div>
      ) : null}

      {emptyState ? emptyState : <div>{children}</div>}

      {pagination ? <div className="mt-10">{pagination}</div> : null}
    </PageLayout>
  );
}