import type { ReactNode } from 'react';
import { Header, Footer, SkipLink, BackToTop } from '../site';
import { useConfig } from '../app/useConfig';

/**
 * Application shell: skip link → header → main → footer (+ back-to-top when
 * enabled). The chrome is configuration-driven; every routed page renders
 * inside this layout.
 */
export function SiteLayout({ children }: { children: ReactNode }) {
  const { configs } = useConfig();
  const backToTopEnabled = configs.features.features.navigation.backToTop.enabled;

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      {backToTopEnabled ? <BackToTop /> : null}
    </div>
  );
}