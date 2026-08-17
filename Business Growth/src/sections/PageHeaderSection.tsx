import { Breadcrumbs } from '../components/navigation/Breadcrumbs';
import type { BreadcrumbItem } from '../components/types';

interface PageHeaderSectionProps {
  breadcrumbs?: BreadcrumbItem[];
  title: string;
  intro?: string;
}

/**
 * Page header band used by content pages (03 §54 shared template elements).
 * Renders breadcrumbs and the single page heading with an optional intro.
 */
export function PageHeaderSection({ breadcrumbs, title, intro }: PageHeaderSectionProps) {
  return (
    <header className="mb-8">
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <div className="mb-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h1>
      {intro ? <p className="mt-3 max-w-2xl text-base text-slate-600">{intro}</p> : null}
    </header>
  );
}