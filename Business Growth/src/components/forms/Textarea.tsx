import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Show an error state styling. */
  invalid?: boolean;
}

/**
 * Multi-line input (04 §52). Styling only; the consuming form owns state,
 * validation and submission.
 */
export function Textarea({ invalid = false, className = '', ...props }: TextareaProps) {
  return (
    <textarea
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