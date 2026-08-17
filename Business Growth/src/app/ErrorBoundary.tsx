import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message?: string;
}

/**
 * Module-level error boundary. Renders a neutral, client-agnostic failure
 * screen (no invented design or client content). Per-page boundaries can be
 * added inside page compositions as needed.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Uncaught application error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
          <h1 className="text-2xl font-semibold text-neutral-900">Something went wrong</h1>
          <p className="max-w-md text-neutral-600">
            The application hit an unexpected error. Please try reloading the page.
          </p>
          {this.state.message ? (
            <pre className="max-w-full overflow-auto rounded border border-neutral-200 bg-neutral-50 p-3 text-left text-xs text-neutral-500">
              {this.state.message}
            </pre>
          ) : null}
          <button
            type="button"
            className="rounded border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
