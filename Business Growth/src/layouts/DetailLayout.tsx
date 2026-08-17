import type { ReactNode } from 'react';
import { PageLayout } from './PageLayout';
import type { BreadcrumbItem } from '../components/types';

interface DetailLayoutProps {
  breadcrumbs?: BreadcrumbItem[];
  title: string;
  intro?: string;
  children: ReactNode;
  /** Optional side column (metadata, quick facts, sticky CTA). */
  aside?: ReactNode;
}

/**
 * Detail page structure (03 §23, §27, §34, §42). Main content column plus an
 * optional aside; collapses to a single column on small screens.
 */
export function DetailLayout({ breadcrumbs, title, intro, children, aside }: DetailLayoutProps) {
  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
        {intro ? <p className="mt-3 max-w-2xl text-base text-slate-600">{intro}</p> : null}
      </header>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">{children}</div>
        {aside ? <aside className="w-full shrink-0 lg:w-80">{aside}</aside> : null}
      </div>
    </PageLayout>
  );
}