import { useEffect, useState } from 'react';
import type { CollectionQuery, CollectionSource, CollectionState } from './collection';
import { collectionStateFromPage } from './collection';

/**
 * Loads a collection from the source boundary and exposes the full view state
 * (items, pagination, category/filters/sort, loading/empty/error). The initial
 * state is synchronous so templates can render a stable skeleton/empty UI
 * without an extra loading frame.
 */
export function useCollection<T>(source: CollectionSource<T>, query: CollectionQuery): CollectionState<T> {
  const [state, setState] = useState<CollectionState<T>>({
    items: [],
    totalCount: 0,
    page: query.page,
    pageSize: query.pageSize,
    totalPages: 0,
    category: query.category,
    filters: query.filters,
    sort: query.sort,
    isError: false,
  });

  const filtersKey = JSON.stringify(query.filters);

  useEffect(() => {
    let active = true;
    setState((previous) => ({
      ...previous,
      items: [],
      page: query.page,
      category: query.category,
      filters: query.filters,
      sort: query.sort,
      isError: false,
      errorMessage: undefined,
    }));

    source
      .fetch(query)
      .then((page) => {
        if (active) {
          setState(collectionStateFromPage(page, query));
        }
      })
      .catch((error: unknown) => {
        if (active) {
          setState((previous) => ({
            ...previous,
            items: [],
            isError: true,
            errorMessage: error instanceof Error ? error.message : 'Failed to load this collection.',
          }));
        }
      });

    return () => {
      active = false;
    };
    // `filtersKey` is the stable identity of the filters object.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, query.page, query.pageSize, query.category, query.sort, filtersKey]);

  return state;
}