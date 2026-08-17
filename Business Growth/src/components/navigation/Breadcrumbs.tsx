import type { BreadcrumbItem } from '../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb navigation (03 §55, 04 §7). The final item is marked current.
 * Items are caller-supplied so parents (Home, section) come from config.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }
  const last = items[items.length - 1];
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {items.map((item) => {
          const isCurrent = item === last;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {isCurrent ? (
                <span aria-current="page" className="font-medium text-slate-900">
                  {item.label}
                </span>
              ) : item.href ? (
                <>
                  <a href={item.href} className="hover:text-slate-800 hover:underline">
                    {item.label}
                  </a>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}