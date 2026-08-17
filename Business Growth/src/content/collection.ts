/**
 * Collection boundary (Phase 6 §12). A listing template consumes a
 * `CollectionSource` through this interface — never a database, an API, Prisma
 * or any concrete backend. The data source stays behind this boundary and can
 * be swapped without touching the templates.
 */

export interface CollectionQuery {
  page: number;
  pageSize: number;
  category?: string;
  filters: Record<string, string>;
  sort?: string;
}

export interface CollectionPage<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface CollectionState<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  category?: string;
  filters: Record<string, string>;
  sort?: string;
  /** Distinguishes a genuinely empty collection from a failed request. */
  isError: boolean;
  errorMessage?: string;
}

export interface CollectionSource<T> {
  readonly pageSize: number;
  fetch(query: CollectionQuery): Promise<CollectionPage<T>>;
}

/**
 * Honest empty source used until a real data source is provisioned (Phase 6
 * §12.17). It never fabricates items or fake success — templates render their
 * intentional empty state.
 */
export function createEmptyCollectionSource<T>(pageSize = 12): CollectionSource<T> {
  return {
    pageSize,
    async fetch(query: CollectionQuery): Promise<CollectionPage<T>> {
      return { items: [], totalCount: 0, page: query.page, pageSize, totalPages: 0 };
    },
  };
}

/** Maps a fetched page into the full view state (pure, unit-testable). */
export function collectionStateFromPage<T>(
  page: CollectionPage<T>,
  query: CollectionQuery,
  additional: Partial<Pick<CollectionState<T>, 'category' | 'filters' | 'sort'>> = {}
): CollectionState<T> {
  return {
    items: page.items,
    totalCount: page.totalCount,
    page: page.page,
    pageSize: page.pageSize,
    totalPages: page.totalPages,
    category: query.category,
    filters: query.filters,
    sort: query.sort,
    isError: false,
    ...additional,
  };
}