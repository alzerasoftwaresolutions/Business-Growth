import type { Specification } from '../types';

interface SpecificationTableProps {
  specifications: Specification[];
  className?: string;
}

/**
 * Technical specification table (04 §28, §69). Semantic `<table>` with a
 * horizontal-scroll container on small screens (02 §28) — content is never
 * shrunk to unreadable sizes.
 */
export function SpecificationTable({ specifications, className = '' }: SpecificationTableProps) {
  if (specifications.length === 0) {
    return null;
  }
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {specifications.map((spec) => (
            <tr key={spec.label} className="border-b border-slate-200 last:border-b-0">
              <th scope="row" className="py-3 pr-4 font-medium text-slate-600">
                {spec.label}
              </th>
              <td className="py-3 text-slate-900">
                {spec.value}
                {spec.unit ? <span className="text-slate-500"> {spec.unit}</span> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}