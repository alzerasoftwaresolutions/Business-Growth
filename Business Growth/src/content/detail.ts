import { useEffect, useState } from 'react';

/**
 * Detail content boundary (Phase 6 §13). A detail template loads its item
 * through a `DetailSource` — never a database or API directly. Until a real
 * source is provisioned, the empty source keeps templates rendering their
 * honest "not yet available" state.
 */

export interface DetailContent<T> {
  item?: T;
}

export interface DetailSource<T> {
  fetch(slug: string): Promise<DetailContent<T>>;
}

export function createEmptyDetailSource<T>(): DetailSource<T> {
  return {
    async fetch(): Promise<DetailContent<T>> {
      return { item: undefined };
    },
  };
}

export interface DetailState<T> {
  item?: T;
  isError: boolean;
  errorMessage?: string;
}

export function useDetail<T>(source: DetailSource<T>, slug: string): DetailState<T> {
  const [state, setState] = useState<DetailState<T>>({ item: undefined, isError: false });

  useEffect(() => {
    let active = true;
    setState({ item: undefined, isError: false });
    source
      .fetch(slug)
      .then((content) => {
        if (active) {
          setState({ item: content.item, isError: false });
        }
      })
      .catch((error: unknown) => {
        if (active) {
          setState({ item: undefined, isError: true, errorMessage: error instanceof Error ? error.message : 'Failed to load this content.' });
        }
      });
    return () => {
      active = false;
    };
  }, [source, slug]);

  return state;
}