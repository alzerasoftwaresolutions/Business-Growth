import { createContext } from 'react';
import type { LoadedConfigs } from '../config';

/**
 * Holds the validated configuration bundle. Populated once by `ConfigProvider`.
 * Split from the provider component and the hook so each module has a single
 * responsibility (and to keep the react-refresh rule satisfied).
 */
export const ConfigContext = createContext<LoadedConfigs | null>(null);
