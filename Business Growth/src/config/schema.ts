import Ajv, { type AnySchema, type ErrorObject, type ValidateFunction } from 'ajv';

import projectSchema from '../../configuration/schemas/project.config.schema.json';
import businessSchema from '../../configuration/schemas/business.config.schema.json';
import featuresSchema from '../../configuration/schemas/features.config.schema.json';
import navigationSchema from '../../configuration/schemas/navigation.config.schema.json';
import contactSchema from '../../configuration/schemas/contact.config.schema.json';
import seoSchema from '../../configuration/schemas/seo.config.schema.json';
import analyticsSchema from '../../configuration/schemas/analytics.config.schema.json';

import type { ConfigIssue } from './errors';

export type ConfigKey =
  | 'project'
  | 'business'
  | 'features'
  | 'navigation'
  | 'contact'
  | 'seo'
  | 'analytics';

/**
 * The seven aligned configuration schemas. They are external JSON files whose
 * literal import type does not structurally match Ajv's `JSONSchema` interface,
 * so they are cast once here. The cast is safe by construction: every schema
 * mirrors the authoritative configuration files (see
 * `configuration/SCHEMA-ALIGNMENT.md`) and is exercised by the test matrix.
 */
const SCHEMAS: Array<[ConfigKey, AnySchema]> = [
  ['project', projectSchema as unknown as AnySchema],
  ['business', businessSchema as unknown as AnySchema],
  ['features', featuresSchema as unknown as AnySchema],
  ['navigation', navigationSchema as unknown as AnySchema],
  ['contact', contactSchema as unknown as AnySchema],
  ['seo', seoSchema as unknown as AnySchema],
  ['analytics', analyticsSchema as unknown as AnySchema],
];

let ajv: Ajv | null = null;
const validators = new Map<ConfigKey, ValidateFunction>();

function getAjv(): Ajv {
  if (!ajv) {
    ajv = new Ajv({ allErrors: true, strict: true });
    for (const [key, schema] of SCHEMAS) {
      validators.set(key, ajv.compile(schema));
    }
  }
  return ajv;
}

/**
 * Returns the compiled, cached validator for a configuration file. Schemas are
 * compiled exactly once per process (never per validation call) so schema
 * validation adds no repeated compile overhead.
 */
export function getValidator<T = unknown>(key: ConfigKey): ValidateFunction<T> {
  getAjv();
  const resolved = validators.get(key);
  if (!resolved) {
    throw new Error(`No schema registered for "${key}".`);
  }
  return resolved as ValidateFunction<T>;
}

/**
 * Validates `data` against the aligned schema for `key`.
 * Returns an empty array when valid; otherwise one structured issue per Ajv
 * error (allErrors mode) preserving the keyword and instance path.
 */
export function validateWithSchema(key: ConfigKey, data: unknown): ConfigIssue[] {
  const validate = getValidator(key);
  if (validate(data)) {
    return [];
  }
  return (validate.errors ?? []).map((error) => toConfigIssue(key, error));
}

function toConfigIssue(key: ConfigKey, error: ErrorObject): ConfigIssue {
  return {
    level: 'error',
    config: `${key}.config.json`,
    path: error.instancePath || '#',
    keyword: error.keyword,
    message: error.message ?? 'Validation failed',
  };
}
