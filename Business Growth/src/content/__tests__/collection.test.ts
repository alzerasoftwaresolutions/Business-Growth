import { describe, expect, it } from 'vitest';
import { createEmptyCollectionSource, collectionStateFromPage } from '../collection';
import { parseCollectionQuery, buildPaginationHref, PAGE_PARAM, CATEGORY_PARAM, SORT_PARAM } from '../query';
import { paginationItems } from '../pagination';

const params = (query: string): URLSearchParams => new URLSearchParams(query);

describe('parseCollectionQuery', () => {
  it('clamps invalid and negative page numbers to 1', () => {
    expect(parseCollectionQuery(params('page=abc'), { defaultPageSize: 12 }).page).toBe(1);
    expect(parseCollectionQuery(params('page=0'), { defaultPageSize: 12 }).page).toBe(1);
    expect(parseCollectionQuery(params('page=-3'), { defaultPageSize: 12 }).page).toBe(1);
    expect(parseCollectionQuery(params('page=4'), { defaultPageSize: 12 }).page).toBe(4);
  });

  it('uses the configured default page size', () => {
    const query = parseCollectionQuery(params(''), { defaultPageSize: 24 });
    expect(query.pageSize).toBe(24);
  });

  it('normalizes category against the whitelist', () => {
    const allowed = ['screws', 'bolts'];
    expect(parseCollectionQuery(params(`${CATEGORY_PARAM}=screws`), { defaultPageSize: 12, allowedCategories: allowed }).category).toBe('screws');
    expect(parseCollectionQuery(params(`${CATEGORY_PARAM}=unknown`), { defaultPageSize: 12, allowedCategories: allowed }).category).toBeUndefined();
    expect(parseCollectionQuery(params(`${CATEGORY_PARAM}=anything`), { defaultPageSize: 12 }).category).toBe('anything');
  });

  it('normalizes sort against the whitelist', () => {
    const allowed = ['newest'];
    expect(parseCollectionQuery(params(`${SORT_PARAM}=newest`), { defaultPageSize: 12, allowedSorts: allowed }).sort).toBe('newest');
    expect(parseCollectionQuery(params(`${SORT_PARAM}=oldest`), { defaultPageSize: 12, allowedSorts: allowed }).sort).toBeUndefined();
  });

  it('collects unknown keys as generic filters', () => {
    const query = parseCollectionQuery(params('material=steel&finish=matte'), { defaultPageSize: 12 });
    expect(query.filters).toEqual({ material: 'steel', finish: 'matte' });
  });

  it('never treats page/category/sort as generic filters', () => {
    const query = parseCollectionQuery(params(`${PAGE_PARAM}=2&${CATEGORY_PARAM}=x&${SORT_PARAM}=y&z=1`), { defaultPageSize: 12 });
    expect(query.filters).toEqual({ z: '1' });
  });
});

describe('buildPaginationHref', () => {
  it('sets the page parameter while preserving other state', () => {
    const href = buildPaginationHref('/products', params(`${CATEGORY_PARAM}=screws&${SORT_PARAM}=newest`), 3);
    expect(href).toContain('/products');
    expect(href).toContain(`${PAGE_PARAM}=3`);
    expect(href).toContain(`${CATEGORY_PARAM}=screws`);
    expect(href).toContain(`${SORT_PARAM}=newest`);
  });

  it('replaces an existing page parameter', () => {
    const href = buildPaginationHref('/products', params(`${PAGE_PARAM}=1`), 2);
    expect(href).toContain(`${PAGE_PARAM}=2`);
    expect(href).not.toContain(`${PAGE_PARAM}=1`);
  });

  it('always carries the page parameter for stateful links', () => {
    expect(buildPaginationHref('/products', params(''), 1)).toBe('/products?page=1');
  });
});

describe('paginationItems', () => {
  it('returns nothing for invalid totals', () => {
    expect(paginationItems(1, 0)).toEqual([]);
    expect(paginationItems(1, -1)).toEqual([]);
  });

  it('lists every page when totals are small', () => {
    expect(paginationItems(1, 1)).toEqual([1]);
    expect(paginationItems(2, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('ellipsizes the middle range while keeping the ends', () => {
    expect(paginationItems(1, 10)).toEqual([1, 2, 'ellipsis', 10]);
    expect(paginationItems(5, 10)).toEqual([1, 'ellipsis', 4, 5, 6, 'ellipsis', 10]);
    expect(paginationItems(10, 10)).toEqual([1, 'ellipsis', 9, 10]);
  });
});

describe('collection boundary', () => {
  it('empty source never fabricates items', async () => {
    const source = createEmptyCollectionSource<number>();
    expect(source.pageSize).toBe(12);
    const page = await source.fetch({ page: 1, pageSize: 12, filters: {} });
    expect(page.items).toEqual([]);
    expect(page.totalCount).toBe(0);
    expect(page.totalPages).toBe(0);
  });

  it('maps a fetched page into view state without an error', () => {
    const state = collectionStateFromPage(
      { items: [{ id: 1 }], totalCount: 1, page: 1, pageSize: 12, totalPages: 1 },
      { page: 1, pageSize: 12, category: 'x', filters: {}, sort: 'newest' }
    );
    expect(state.isError).toBe(false);
    expect(state.category).toBe('x');
    expect(state.sort).toBe('newest');
    expect(state.totalCount).toBe(1);
  });
});