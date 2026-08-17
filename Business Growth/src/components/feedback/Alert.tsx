import type { ReactNode } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

const VARIANT_CLASSES: Record<AlertVariant, string> = {
  info: 'border-blue-200 bg-blue-50 text-blue-900',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  warning: 'border-amber-200 bg-amber-50 text-amber-900',
  error: 'border-red-200 bg-red-50 text-red-900',
};

interface AlertProps {
  variant?: AlertVariant;
  /** Announced to assistive technology. */
  title?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Inline status/notification message (04 §70). Error alerts use `role="alert"`
 * so failures are announced; content stays visually consistent with the
 * neutral template.
 */
export function Alert({ variant = 'info', title, children, className = '' }: AlertProps) {
  const isError = variant === 'error';
  return (
    <div role={isError ? 'alert' : undefined} className={`rounded-md border px-4 py-3 text-sm ${VARIANT_CLASSES[variant]} ${className}`}>
      {title ? <p className="font-semibold">{title}</p> : null}
      {children ? <div className={title ? 'mt-1' : undefined}>{children}</div> : null}
    </div>
  );
}