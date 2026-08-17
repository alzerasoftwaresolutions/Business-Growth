import { useConfig } from '../app/useConfig';
import { resolvePageTitle } from '../app/routes';
import { PageSeo } from '../seo/PageSeo';
import { PageLayout } from '../layouts/PageLayout';
import { PageHeaderSection } from '../sections/PageHeaderSection';
import { EmptyState } from '../components/feedback/EmptyState';

/**
 * Legal template (03 §57, Phase 6 §14). Legal pages never fabricate text: the
 * client provides their approved policy/terms content; until then an honest
 * "not yet available" state is shown.
 */
export function LegalTemplate({ template }: { template: 'privacy' | 'terms' }) {
  const { configs } = useConfig();
  const title = resolvePageTitle(configs, template);
  const legal = configs.business.legal;

  return (
    <>
      <PageSeo template={template} />

      <PageLayout>
        <PageHeaderSection title={title} />
        {template === 'privacy' && legal.privacyPolicyUrl ? (
          <a href={legal.privacyPolicyUrl} target="_blank" rel="noreferrer noopener" className="text-sm font-medium text-blue-600 hover:underline">
            Open the privacy policy ↗
          </a>
        ) : null}
        {template === 'terms' && legal.termsUrl ? (
          <a href={legal.termsUrl} target="_blank" rel="noreferrer noopener" className="text-sm font-medium text-blue-600 hover:underline">
            Open the terms of use ↗
          </a>
        ) : null}
        {template === 'privacy' && !legal.privacyPolicyUrl ? (
          <EmptyState title="Content not yet available" description="The privacy policy will appear here when the client provides it." />
        ) : null}
        {template === 'terms' && !legal.termsUrl ? (
          <EmptyState title="Content not yet available" description="The terms of use will appear here when the client provides them." />
        ) : null}
      </PageLayout>
    </>
  );
}