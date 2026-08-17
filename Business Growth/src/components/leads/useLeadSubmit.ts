import { useCallback, useState } from 'react';
import { submitLead, type LeadFormType, type LeadResult } from '../../lib/leads';

/**
 * Form submission state hook. Everything flows through the `leads` boundary
 * (`src/lib/leads.ts`) — components never fake a success, a backend, or a
 * fallback. Pure state management, unit-testable without a DOM.
 */
export function useLeadSubmit(formType: LeadFormType) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<LeadResult | null>(null);

  const submit = useCallback(
    async (fields: Record<string, string>) => {
      setSubmitting(true);
      setResult(null);
      const res = await submitLead({ formType, fields });
      setResult(res);
      setSubmitting(false);
      return res;
    },
    [formType]
  );

  return { submitting, result, submit };
}