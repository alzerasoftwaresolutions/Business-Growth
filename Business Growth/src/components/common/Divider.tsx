interface DividerProps {
  className?: string;
}

/** Horizontal rule used to group content (04 §6). */
export function Divider({ className = '' }: DividerProps) {
  return <hr aria-hidden="true" className={`border-t border-slate-200 ${className}`} />;
}