import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, mainCta } from '../../data/navigation';
import { siteConfig } from '../../data/site';

const uppercase = (label: string) => label.toUpperCase();

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `nav-underline font-sans text-[13px] font-bold uppercase tracking-[0.05em] transition-colors ${
    isActive ? 'is-active text-gold-600' : 'text-navy-950 hover:text-gold-600'
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-white">
      <div className="container-site flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded bg-navy-950">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 text-gold-500"
              aria-hidden="true"
            >
              <path d="M3 21h18M4 21V8l8-5 8 5v13M9 21v-6h6v6M9 11h.01M12 11h.01M15 11h.01" />
            </svg>
          </span>
          <span className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-navy-950">
            {siteConfig.logoText}
            <span className="block text-[10px] font-medium tracking-[0.2em] text-slate-600">
              {siteConfig.industrySuffix}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-3 md:flex lg:gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClasses} end={link.path === '/'}>
              {uppercase(link.label)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block lg:hidden">
          <Link to={mainCta.path} className="btn-primary px-4 py-2 text-[11px]">
            {uppercase(mainCta.label)}
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link to={mainCta.path} className="btn-primary">
            {uppercase(mainCta.label)}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded text-navy-950 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div
          className="menu-overlay fixed inset-0 z-40 flex flex-col bg-navy-950 text-white md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          {/* Top row: logo + close */}
          <div className="container-site flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <span className="flex h-10 w-10 items-center justify-center rounded bg-white/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 text-gold-500"
                  aria-hidden="true"
                >
                  <path d="M3 21h18M4 21V8l8-5 8 5v13M9 21v-6h6v6M9 11h.01M12 11h.01M15 11h.01" />
                </svg>
              </span>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-white">
                {siteConfig.logoText}
                <span className="block text-[10px] font-medium tracking-[0.2em] text-white/50">
                  {siteConfig.industrySuffix}
                </span>
              </span>
            </Link>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded text-white"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Center stack: giant links */}
          <nav
            className="flex flex-1 flex-col items-center justify-center px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
                className={({ isActive }) =>
                  `menu-item font-sans text-[12vw] font-bold uppercase leading-tight tracking-tight text-white transition-colors hover:text-gold-500 ${
                    isActive ? 'text-gold-500' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* CTA */}
            <div className="menu-item mt-10" style={{ animationDelay: `${navLinks.length * 0.05}s` }}>
              <Link
                to={mainCta.path}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
              >
                {uppercase(mainCta.label)}
              </Link>
            </div>
          </nav>

          {/* Footer anchors */}
          <div className="container-site flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-sans text-xs uppercase tracking-[0.1em] text-white/40">
              Commercial, Industrial & Infrastructure Construction
            </p>
            <a
              href={siteConfig.emailHref}
              className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-gold-500"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}