import type { TimelineItem as TimelineItemModel } from '../types';

interface TimelineProps {
  items: TimelineItemModel[];
  className?: string;
}

/**
 * Chronological company/milestone timeline (04 §41). Vertical list with year
 * and milestone; content-driven and order provided by the caller.
 */
export function Timeline({ items, className = '' }: TimelineProps) {
  if (items.length === 0) {
    return null;
  }
  return (
    <ol className={`relative space-y-8 border-l border-slate-200 pl-6 ${className}`}>
      {items.map((item) => (
        <li key={`${item.year}-${item.title}`} className="relative">
          <span aria-hidden="true" className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full bg-slate-400" />
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{item.year}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
          {item.description ? <p className="mt-1 text-sm text-slate-600">{item.description}</p> : null}
        </li>
      ))}
    </ol>
  );
}