import { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from './ConfigProvider';
import { useConfig } from './useConfig';
import { ErrorBoundary } from './ErrorBoundary';
import { SiteLayout } from '../layouts/SiteLayout';
import { TemplateView } from '../templates';
import { NotFoundTemplate } from '../templates/NotFoundTemplate';
import { buildRouteEntries } from './routes';

/**
 * Renders the feature-aware route table built from the authoritative
 * configuration. Each enabled page template gets a route mapped through the
 * template registry; disabled features expose no routes. The wildcard route
 * renders the neutral NotFound template inside the site chrome.
 */
function AppRoutes() {
  const { configs } = useConfig();
  const entries = useMemo(() => buildRouteEntries(configs), [configs]);

  return (
    <SiteLayout>
      <Routes>
        {entries.map((entry) => (
          <Route key={entry.path} path={entry.path} element={<TemplateView template={entry.template} />} />
        ))}
        <Route path="*" element={<NotFoundTemplate />} />
      </Routes>
    </SiteLayout>
  );
}

/**
 * Application shell. Composition order:
 * 1. ErrorBoundary — catches render errors from the whole tree.
 * 2. ConfigProvider — loads + validates the authoritative configuration.
 * 3. BrowserRouter — routing foundation.
 * 4. SiteLayout — site chrome shared by every routed page.
 */
export default function App() {
  return (
    <ErrorBoundary>
      <ConfigProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ConfigProvider>
    </ErrorBoundary>
  );
}
