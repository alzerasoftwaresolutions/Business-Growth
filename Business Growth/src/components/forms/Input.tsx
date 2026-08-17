import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Show an error state styling. */
  invalid?: boolean;
}

/**
 * Text/number/email/etc. input (04 §15, §52). Styling only — state and
 * validation are owned by the consuming form. Any native attribute passes
 * through (name, type, required, autoComplete, …).
 */
export function Input({ invalid = false, className = '', ...props }: InputProps) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      className={`w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
        invalid
          ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
          : 'border-slate-300 focus:border-blue-600 focus:ring-blue-600'
      } ${className}`}
    />
  );
}