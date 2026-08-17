import { describe, expect, it, vi } from 'vitest';

import { getConfigs } from '../../config';
import { submitLead, type LeadPayload } from '../leads';
import type { PackageConfigs } from '../../types';

const payload: LeadPayload = {
  formType: 'contact',
  fields: { name: 'Test Contact' },
};

const enabledConfig = {
  project: { development: { backend: { enabled: true } } },
} as unknown as Pick<PackageConfigs, 'project'>;

const okFetch = vi.fn().mockResolvedValue({ ok: true, status: 200 });

describe('lead submission boundary', () => {
  it('is unavailable when the backend is disabled (no fetch attempted)', async () => {
    const fetchFn = vi.fn();
    const result = await submitLead(payload, {
      configs: getConfigs(),
      env: { formEndpoint: 'https://api.example.com/leads' },
      fetchFn,
    });
    expect(result).toEqual({ status: 'unavailable', reason: 'backend-disabled' });
    expect(fetchFn).not.toHaveBeenCalled();
  });

  it('is unavailable when no endpoint is provisioned', async () => {
    const result = await submitLead(payload, {
      configs: enabledConfig,
      env: { formEndpoint: '' },
      fetchFn: vi.fn(),
    });
    expect(result).toEqual({ status: 'unavailable', reason: 'no-endpoint' });
  });

  it('posts and accepts when the endpoint succeeds', async () => {
    const result = await submitLead(payload, {
      configs: enabledConfig,
      env: { formEndpoint: 'https://api.example.com/leads' },
      fetchFn: okFetch,
    });
    expect(result).toEqual({ status: 'accepted' });
    expect(okFetch).toHaveBeenCalledTimes(1);
    const [url, init] = okFetch.mock.calls[0];
    expect(url).toBe('https://api.example.com/leads');
    expect((init as { method: string }).method).toBe('POST');
  });

  it('reports an error when the endpoint rejects the request', async () => {
    const fetchFn = vi.fn().mockResolvedValue({ ok: false, status: 500 });
    const result = await submitLead(payload, {
      configs: enabledConfig,
      env: { formEndpoint: 'https://api.example.com/leads' },
      fetchFn,
    });
    expect(result.status).toBe('error');
    if (result.status === 'error') {
      expect(result.reason).toBe('request-failed');
      expect(result.message).toContain('500');
    }
  });

  it('reports an error when the request throws', async () => {
    const fetchFn = vi.fn().mockRejectedValue(new Error('boom'));
    const result = await submitLead(payload, {
      configs: enabledConfig,
      env: { formEndpoint: 'https://api.example.com/leads' },
      fetchFn,
    });
    expect(result.status).toBe('error');
    if (result.status === 'error') {
      expect(result.message).toBe('boom');
    }
  });
});