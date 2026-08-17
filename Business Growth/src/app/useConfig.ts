import { useContext } from 'react';
import { ConfigContext } from './ConfigContext';
import type { LoadedConfigs } from '../config';

/** Access the validated configuration bundle inside the `ConfigProvider`. */
export function useConfig(): LoadedConfigs {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider.');
  }
  return context;
}
