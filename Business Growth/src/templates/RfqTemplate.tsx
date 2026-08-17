import { useConfig } from '../app/useConfig';
import { resolvePageTitle } from '../app/routes';
import { PageSeo } from '../seo/PageSeo';
import { PageLayout } from '../layouts/PageLayout';
import { PageHeaderSection } from '../sections/PageHeaderSection';
import { RFQForm } from '../components/leads/RFQForm';
import { EmptyState } from '../components/feedback/EmptyState';

/**
 * Request-for-quote template (03 §52, Phase 6 §15). Renders the RFQ form only
 * when the RFQ feature is enabled; otherwise an honest unavailable state.
 */
export function RfqTemplate() {
  const { configs } = useConfig();
  const rfqEnabled = configs.features.features.leadGeneration.rfq.enabled;
  const title = resolvePageTitle(configs, 'rfq');
  const intro = configs.contact.rfq.intro || undefined;

  return (
    <>
      <PageSeo template="rfq" />

      <PageLayout>
        <PageHeaderSection title={title} intro={intro} />
        {rfqEnabled ? <RFQForm /> : <EmptyState title="Request form unavailable" description="Please use the contact page to reach us directly." />}
      </PageLayout>
    </>
  );
}