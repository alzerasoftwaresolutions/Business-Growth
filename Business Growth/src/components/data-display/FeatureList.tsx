import type { Feature } from '../types';

interface FeatureListProps {
  features: Feature[];
  className?: string;
}

/**
 * Feature list (04 §33, §36, §76). Features are separated from technical
 * specifications; content-driven and order provided by the caller.
 */
export function FeatureList({ features, className = '' }: FeatureListProps) {
  if (features.length === 0) {
    return null;
  }
  return (
    <ul className={`space-y-4 ${className}`}>
      {features.map((feature) => (
        <li key={feature.title} className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
          {feature.description ? <p className="text-sm text-slate-600">{feature.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}