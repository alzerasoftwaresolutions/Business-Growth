import type { Stat as StatModel } from '../types';
import { Stat } from './Stat';

interface StatGridProps {
  stats: StatModel[];
}

/**
 * Company statistics grid (04 §40). Renders nothing when there is no verified
 * stat data — optional content never produces a broken/empty section.
 */
export function StatGrid({ stats }: StatGridProps) {
  if (stats.length === 0) {
    return null;
  }
  return (
    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Stat key={`${stat.label}`} stat={stat} />
      ))}
    </dl>
  );
}