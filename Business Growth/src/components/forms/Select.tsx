import type { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

/**
 * Dropdown select (04 §52, §60). Options are caller-supplied; styling only.
 */
export function Select({ invalid = false, className = '', children, ...props }: SelectProps) {
  return (
    <select
      {...props}
      aria-invalid={invalid || undefined}
      className={`w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 ${
        invalid
          ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
          : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600'
      } ${className}`}
    >
      {children}
    </select>
  );
}