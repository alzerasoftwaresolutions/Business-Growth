import { Link } from 'react-router-dom';
import { usePageMeta } from '../lib/usePageMeta';
import { navLinks } from '../data/navigation';
import { pageMeta } from '../data/meta';

export default function NotFound() {
  usePageMeta(pageMeta.notFound);

  return (
    <section className="border-b border-border-light">
      <div className="container-site py-24 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-sans text-4xl font-bold uppercase tracking-tight text-navy-950 sm:text-5xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          The page you were looking for does not exist or has moved. Head back home or
          explore one of the pages below.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
        <nav className="mt-12" aria-label="Useful pages">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-medium text-navy-950 hover:text-gold-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}