interface SkeletonProps {
  className?: string;
}

/**
 * Neutral loading placeholder that reserves layout space (02 §72, 08 §85).
 * Used only where asynchronous loading is genuinely required.
 */
export function Skeleton({ className = '' }: SkeletonProps) {
  return <div aria-hidden="true" className={`animate-pulse rounded-md bg-slate-200 ${className}`} />;
}