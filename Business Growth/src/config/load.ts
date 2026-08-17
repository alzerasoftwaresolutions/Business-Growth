import type { PackageConfigs } from '../types';
import { validateConfigs } from './validate';
import { ConfigValidationError } from './errors';
import type { ConfigIssue } from './errors';

import projectRaw from '../../configuration/project.config.json';
import businessRaw from '../../configuration/business.config.json';
import featuresRaw from '../../configuration/features.config.json';
import navigationRaw from '../../configuration/navigation.config.json';
import contactRaw from '../../configuration/contact.config.json';
import seoRaw from '../../configuration/seo.config.json';
import analyticsRaw from '../../configuration/analytics.config.json';

export interface LoadedConfigs {
  /** Typed, schema-validated configuration bundle. */
  configs: PackageConfigs;
  /** Non-fatal issues (informational warnings only). */
  issues: ConfigIssue[];
}

const RAW = {
  project: projectRaw,
  business: businessRaw,
  features: featuresRaw,
  navigation: navigationRaw,
  contact: contactRaw,
  seo: seoRaw,
  analytics: analyticsRaw,
} as const;

let cached: LoadedConfigs | null = null;

/**
 * Loads the authoritative configuration files from `configuration/` at the
 * package root. `configuration/` is the single source of truth; nothing is
 * copied into `src/`.
 *
 * Every configuration file is validated against its aligned JSON Schema
 * (Ajv) plus cross-configuration consistency rules. Any `error`-level issue
 * throws a `ConfigValidationError` with structured file/path/keyword details —
 * the application cannot safely operate against an unknown contract and fails
 * clearly rather than silently repairing invalid configuration.
 *
 * The typed boundary below is the single place where validated JSON is
 * converted to the TypeScript contracts. The direct `as` casts are
 * compile-time invariants (contracts must mirror the configs) AND runtime
 * invariants (Ajv validated the data above). No defaults are invented.
 */
export function loadConfigs(): LoadedConfigs {
  if (cached) {
    return cached;
  }

  const configs = asPackageConfigs(RAW);
  const validation = validateConfigs(configs);

  const errors = validation.issues.filter((issue) => issue.level === 'error');
  if (errors.length > 0) {
    throw new ConfigValidationError(errors);
  }

  cached = {
    configs,
    issues: validation.issues,
  };

  return cached;
}

/** Convenience accessor for the typed configuration bundle. */
export function getConfigs(): PackageConfigs {
  return loadConfigs().configs;
}

function asPackageConfigs(raw: typeof RAW): PackageConfigs {
  return {
    project: raw.project as PackageConfigs['project'],
    business: raw.business as PackageConfigs['business'],
    features: raw.features as PackageConfigs['features'],
    navigation: raw.navigation as PackageConfigs['navigation'],
    contact: raw.contact as PackageConfigs['contact'],
    seo: raw.seo as PackageConfigs['seo'],
    analytics: raw.analytics as PackageConfigs['analytics'],
  };
}
