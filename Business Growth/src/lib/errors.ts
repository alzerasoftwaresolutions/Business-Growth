/** Base error for application-level failures. */
export class AppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AppError';
  }
}

/**
 * Raised when the configuration bundle cannot be loaded or contains
 * `error`-level structural issues.
 */
export class ConfigError extends AppError {
  constructor(message: string) {
    super(message);
    this.name = 'ConfigError';
  }
}

/** Normalize an unknown thrown value into a readable error message. */
export function toErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unknown error occurred.';
}
