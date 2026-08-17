import { Link } from 'react-router-dom';
import { buildPaginationHref } from '../../content/query';
import { paginationItems } from '../../content/pagination';

interface PaginationProps {
  page: number;
  totalPages: number;
  basePath: string;
  /** URL state to preserve across pages (category/sort/filters). */
  searchParams?: URLSearchParams;
}

/**
 * Keyboard-accessible pagination (Phase 6 §12.7). Uses real links, labels the
 * navigation, marks the current page, and preserves all URL state. Renders
 * nothing when there is a single page.
 */
export function Pagination({ page, totalPages, basePath, searchParams }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const items = paginationItems(page, totalPages);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5">
      {page > 1 ? (
        <Link
          to={buildPaginationHref(basePath, searchParams ?? new URLSearchParams(), page - 1)}
          aria-label="Previous page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm text-slate-600 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          ←
        </Link>
      ) : (
        <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm text-slate-300">
          ←
        </span>
      )}

      {items.map((item, index) =>
        item === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} aria-hidden="true" className="px-1 text-sm text-slate-400">
            …
          </span>
        ) : (
          <Link
            key={item}
            to={buildPaginationHref(basePath, searchParams ?? new URLSearchParams(), item)}
            aria-current={item === page ? 'page' : undefined}
            className={`inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
              item === page ? 'bg-slate-900 font-medium text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {item}
          </Link>
        )
      )}

      {page < totalPages ? (
        <Link
          to={buildPaginationHref(basePath, searchParams ?? new URLSearchParams(), page + 1)}
          aria-label="Next page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm text-slate-600 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          →
        </Link>
      ) : (
        <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm text-slate-300">
          →
        </span>
      )}
    </nav>
  );
}