import type { ReactNode } from 'react';

interface FormActionsProps {
  children: ReactNode;
  className?: string;
}

/** Submit/reset button row (04 §52). */
export function FormActions({ children, className = '' }: FormActionsProps) {
  return <div className={`flex flex-wrap items-center gap-3 ${className}`}>{children}</div>;
}