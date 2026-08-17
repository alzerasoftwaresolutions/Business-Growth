import type { CollectionQuery } from './collection';

/** Query parameter names for listing URL state (Phase 6 §12.4). */
export const PAGE_PARAM = 'page';
export const CATEGORY_PARAM = 'category';
export const SORT_PARAM = 'sort';

export interface CollectionQueryOptions {
  defaultPageSize: number;
  /** Optional whitelist that normalizes the category parameter. */
  allowedCategories?: string[];
  /** Optional whitelist that normalizes the sort parameter. */
  allowedSorts?: string[];
}

/**
 * Parses and normalizes listing state from the URL (Phase 6 §12.4). Invalid
 * page numbers are clamped to 1; unknown category/sort values are dropped when
 * a whitelist is supplied. Unknown query keys become generic filters.
 */
export function parseCollectionQuery(
  searchParams: URLSearchParams,
  options: CollectionQueryOptions
): CollectionQuery {
  const rawPage = Number.parseInt(searchParams.get(PAGE_PARAM) ?? '', 10);
  const page = Number.isFinite(rawPage) && rawPage >= 1 ? rawPage : 1;

  let category = searchParams.get(CATEGORY_PARAM) ?? undefined;
  if (category && options.allowedCategories && !options.allowedCategories.includes(category)) {
    category = undefined;
  }

  let sort = searchParams.get(SORT_PARAM) ?? undefined;
  if (sort && options.allowedSorts && !options.allowedSorts.includes(sort)) {
    sort = undefined;
  }

  const filters: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (key === PAGE_PARAM || key === CATEGORY_PARAM || key === SORT_PARAM) {
      return;
    }
    if (value) {
      filters[key] = value;
    }
  });

  return { page, pageSize: options.defaultPageSize, category, filters, sort };
}

/**
 * Builds a page link for a base path, preserving all other URL state
 * (category, sort, filters). Used by the Pagination component (Phase 6 §12.7).
 */
export function buildPaginationHref(basePath: string, searchParams: URLSearchParams, page: number): string {
  const params = new URLSearchParams(searchParams);
  params.set(PAGE_PARAM, String(page));
  const query = params.toString();
  return query ? `${basePath}?${query}` : basePath;
}