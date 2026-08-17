import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { breadcrumbLabels, heroBackgrounds } from '../data/meta';

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const label = breadcrumbLabels[pathname];
  if (!label) return null;

  const items = [
    { label: 'Home', path: '/' },
    { label, path: pathname },
  ];

  const bg = heroBackgrounds[pathname] ?? 'bg-surface-dim';

  return (
    <div className={bg}>
      <nav aria-label="Breadcrumb" className="container-site pt-6">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 ? (
                  <ChevronRight className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
                ) : null}
                {isLast ? (
                  <span
                    className="font-sans text-xs font-bold uppercase tracking-[0.05em] text-navy-950"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="font-sans text-xs font-bold uppercase tracking-[0.05em] text-slate-600 transition-colors hover:text-gold-600"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
