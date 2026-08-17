import type { ReactNode } from 'react';
import { useId } from 'react';

type Control = ReactNode | ((controlId: string) => ReactNode);

interface FormGroupProps {
  label: string;
  htmlFor?: string;
  /** Optional field-level error text (linked to the control). */
  error?: string;
  /** Optional helper text (02 §52). */
  helperText?: string;
  required?: boolean;
  children: Control;
}

/**
 * Label + control + message grouping (04 §52). Wires `htmlFor`/`id`/`aria-*`
 * relationships so every field is programmatically associated.
 */
export function FormGroup({ label, htmlFor, error, helperText, required = false, children }: FormGroupProps) {
  const autoId = useId();
  const controlId = htmlFor ?? autoId;
  const messageId = error || helperText ? `${controlId}-message` : undefined;

  const control = typeof children === 'function' ? children(controlId) : children;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={controlId} className="text-sm font-medium text-slate-700">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-red-500">
            {' '}
            *
          </span>
        ) : null}
      </label>
      {control}
      {error ? (
        <p id={messageId} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p id={messageId} className="text-sm text-slate-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}