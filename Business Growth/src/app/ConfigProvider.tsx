import type { ReactNode } from 'react';
import { ConfigContext } from './ConfigContext';
import { loadConfigs } from '../config';

/**
 * Loads the authoritative configuration bundle once (module-level singleton in
 * `src/config`) and exposes it to the component tree. Loading throws a
 * `ConfigValidationError` for structurally invalid configuration; the
 * application error boundary handles it.
 */
export function ConfigProvider({ children }: { children: ReactNode }) {
  const loaded = loadConfigs();
  return <ConfigContext.Provider value={loaded}>{children}</ConfigContext.Provider>;
}
