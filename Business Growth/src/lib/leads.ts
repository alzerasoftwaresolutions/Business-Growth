import type { PackageConfigs } from '../types';
import { getConfigs } from '../config';
import { getClientEnv, type ClientEnv } from './env';

/**
 * Backend integration boundary for lead generation.
 *
 * No secrets, credentials, or server logic live in React components. The
 * package POSTs a generic lead payload to a single configured endpoint
 * (`VITE_FORM_ENDPOINT`) and never pretends a backend exists when one is
 * disabled or not provisioned.
 *
 * Later phases may extend this boundary with server-side validation, spam
 * protection, rate limiting, email delivery, and CRM routing — all on the
 * backend side of this boundary.
 */

export type LeadFormType = 'contact' | 'rfq';

export interface LeadPayload {
  formType: LeadFormType;
  fields: Record<string, string>;
}

export type LeadResult =
  | { status: 'accepted' }
  | { status: 'unavailable'; reason: 'backend-disabled' | 'no-endpoint' }
  | { status: 'error'; reason: 'request-failed'; message: string };

export interface LeadServiceDeps {
  /** Inject a configuration override (tests). Defaults to the loaded config. */
  configs?: Pick<PackageConfigs, 'project'>;
  /** Inject an environment override (tests). Defaults to the process env. */
  env?: Partial<ClientEnv>;
  /**
   * Inject a fetch implementation (tests). Defaults to global `fetch`, which
   * is structurally compatible with this signature.
   */
  fetchFn?: (
    endpoint: string,
    init: { method: string; headers: Record<string, string>; body: string }
  ) => Promise<{ ok: boolean; status: number }>;
}

/**
 * Submits a lead to the configured backend boundary.
 *
 * Graceful states, never a fake success:
 * - backend disabled        → `unavailable: backend-disabled`
 * - backend enabled, no endpoint provisioned → `unavailable: no-endpoint`
 * - endpoint accepts        → `accepted`
 * - endpoint rejects/fails  → `error: request-failed`
 */
export async function submitLead(
  payload: LeadPayload,
  deps: LeadServiceDeps = {}
): Promise<LeadResult> {
  const { configs = getConfigs(), env = getClientEnv(), fetchFn = fetch } = deps;

  if (configs.project.development.backend.enabled !== true) {
    return { status: 'unavailable', reason: 'backend-disabled' };
  }

  const endpoint = env.formEndpoint ?? '';
  if (!endpoint) {
    return { status: 'unavailable', reason: 'no-endpoint' };
  }

  try {
    const response = await fetchFn(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form: payload.formType, fields: payload.fields }),
    });
    if (!response.ok) {
      return {
        status: 'error',
        reason: 'request-failed',
        message: `Server responded with status ${response.status}.`,
      };
    }
    return { status: 'accepted' };
  } catch (error) {
    return {
      status: 'error',
      reason: 'request-failed',
      message: error instanceof Error ? error.message : 'Network request failed.',
    };
  }
}