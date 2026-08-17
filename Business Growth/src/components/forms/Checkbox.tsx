import type { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * Single checkbox with an accessible visible label (04 §52). The native
 * control is preserved for keyboard/focus behavior.
 */
export function Checkbox({ className = '', children, ...props }: CheckboxProps) {
  return (
    <label className={`flex items-start gap-2 text-sm text-slate-700 ${className}`}>
      <input
        type="checkbox"
        {...props}
        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
      />
      <span>{children}</span>
    </label>
  );
}