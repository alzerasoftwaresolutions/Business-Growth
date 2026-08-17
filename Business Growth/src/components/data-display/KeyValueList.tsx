import type { MetadataItem } from '../types';

interface KeyValueListProps {
  items: MetadataItem[];
  className?: string;
}

/**
 * Compact single-column label/value list (04 §74, §75). Used for project
 * metadata, product codes, dates and other key-value data.
 */
export function KeyValueList({ items, className = '' }: KeyValueListProps) {
  return (
    <dl className={`divide-y divide-slate-200 ${className}`}>
      {items.map((item) => (
        <div key={item.label} className="flex items-baseline justify-between gap-4 py-2">
          <dt className="text-sm text-slate-500">{item.label}</dt>
          <dd className="text-sm font-medium text-slate-900">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}