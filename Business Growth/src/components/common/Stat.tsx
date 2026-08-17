import type { Stat } from '../types';

interface StatProps {
  stat: Stat;
}

/**
 * Single structured statistic (05 §15). Displays only provided values — never
 * fabricated figures. `value` is display text; prefix/suffix wrap it.
 */
export function Stat({ stat }: StatProps) {
  return (
    <div className="flex flex-col gap-1">
      <dd className="text-3xl font-semibold tracking-tight text-slate-900">
        {stat.prefix ? <span aria-hidden="true">{stat.prefix}</span> : null}
        {stat.value}
        {stat.suffix ? <span aria-hidden="true">{stat.suffix}</span> : null}
      </dd>
      <dt className="text-sm text-slate-600">{stat.label}</dt>
      {stat.description ? <p className="text-sm text-slate-500">{stat.description}</p> : null}
    </div>
  );
}