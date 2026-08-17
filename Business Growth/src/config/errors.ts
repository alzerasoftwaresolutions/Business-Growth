import { AppError } from '../lib/errors';

export type ConfigIssueLevel = 'error' | 'warn';

export interface ConfigIssue {
  level: ConfigIssueLevel;
  /** Configuration file the issue belongs to, e.g. `seo.config.json`. */
  config: string;
  /** Property path, e.g. `/urls/rules/productDetails`. */
  path: string;
  /** JSON Schema validation keyword that failed (schema errors only). */
  keyword?: string;
  /** Human-readable description of the problem. */
  message: string;
}

/** Format a single issue for a developer-facing error message. */
export function formatConfigIssue(issue: ConfigIssue): string {
  const lines = [`File: ${issue.config}`, `Path: ${issue.path}`];
  if (issue.keyword) {
    lines.push(`Keyword: ${issue.keyword}`);
  }
  lines.push(`Reason: ${issue.message}`);
  return lines.join('\n');
}

/**
 * Raised when the configuration bundle is structurally invalid. Carries the
 * full list of failing issues so callers can render detailed diagnostics.
 */
export class ConfigValidationError extends AppError {
  readonly issues: ConfigIssue[];

  constructor(issues: ConfigIssue[]) {
    const body = issues.map(formatConfigIssue).join('\n\n');
    super(`Configuration validation failed:\n\n${body}`);
    this.name = 'ConfigValidationError';
    this.issues = issues;
  }
}
