import type { MetadataItem } from '../types';

interface MetadataListProps {
  items: MetadataItem[];
  className?: string;
}

/**
 * Reusable label/value metadata block (04 §75, §36). Renders a semantic
 * `<dl>`. Optional values are omitted by the caller; this component never
 * shows empty labels (04 §84).
 */
export function MetadataList({ items, className = '' }: MetadataListProps) {
  return (
    <dl className={`grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 ${className}`}>
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-0.5">
          <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{item.label}</dt>
          <dd className="text-sm text-slate-900">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}