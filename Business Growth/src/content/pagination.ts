export type PaginationItem = number | 'ellipsis';

/**
 * Computes the page list to render, ellipsizing the middle range while always
 * showing the first and last pages (pure, unit-testable).
 */
export function paginationItems(currentPage: number, totalPages: number): PaginationItem[] {
  if (totalPages <= 0) {
    return [];
  }
  const items: PaginationItem[] = [];
  const pushWindow = (from: number, to: number) => {
    for (let page = from; page <= to; page += 1) {
      items.push(page);
    }
  };

  if (totalPages <= 7) {
    pushWindow(1, totalPages);
    return items;
  }

  const start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages, currentPage + 1);

  if (start > 2) {
    pushWindow(1, 1);
    items.push('ellipsis');
  } else if (start > 1) {
    pushWindow(1, start - 1);
  }

  pushWindow(start, end);

  if (end < totalPages - 1) {
    items.push('ellipsis');
    pushWindow(totalPages, totalPages);
  } else if (end < totalPages) {
    pushWindow(end + 1, totalPages);
  }

  return items;
}