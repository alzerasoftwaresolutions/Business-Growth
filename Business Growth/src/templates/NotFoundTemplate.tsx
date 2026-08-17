import { Link } from 'react-router-dom';
import { PageSeo } from '../seo/PageSeo';
import { PageLayout } from '../layouts/PageLayout';
import { EmptyState } from '../components/feedback/EmptyState';

/**
 * Neutral 404 template (Phase 6 §12.9). Renders inside the site chrome with a
 * noindex robots rule and a single path back home.
 */
export function NotFoundTemplate() {
  return (
    <>
      <PageSeo template="home" overrides={{ title: 'Page not found', robots: { index: false, follow: true } }} />

      <PageLayout>
        <EmptyState
          title="Page not found"
          description="The page you are looking for does not exist or has been moved."
          action={
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Back to home
            </Link>
          }
        />
      </PageLayout>
    </>
  );
}