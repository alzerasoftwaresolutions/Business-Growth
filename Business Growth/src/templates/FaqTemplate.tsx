import { useConfig } from '../app/useConfig';
import { resolvePageTitle } from '../app/routes';
import { PageSeo } from '../seo/PageSeo';
import { PageLayout } from '../layouts/PageLayout';
import { PageHeaderSection } from '../sections/PageHeaderSection';
import { Accordion } from '../components/data-display/Accordion';
import { EmptyState } from '../components/feedback/EmptyState';
import { Alert } from '../components/feedback/Alert';
import { createEmptyCollectionSource, useCollection } from '../content';

interface FaqItem {
  question: string;
  answer: string;
}

const faqSource = createEmptyCollectionSource<FaqItem>();

/**
 * FAQ template (03 §50-§51, Phase 6 §14). FAQs arrive through the collection
 * boundary (05 §43); until the client provides them the honest empty state is
 * shown. Answers render in an accessible disclosure (04 §68).
 */
export function FaqTemplate() {
  const { configs } = useConfig();
  const title = resolvePageTitle(configs, 'faq');
  const state = useCollection(faqSource, { page: 1, pageSize: 100, category: undefined, sort: undefined, filters: {} });

  return (
    <>
      <PageSeo template="faq" />

      <PageLayout>
        <PageHeaderSection title={title} />
        {state.isError ? (
          <Alert variant="error" title="Failed to load FAQs">
            {state.errorMessage}
          </Alert>
        ) : null}
        {!state.isError && state.items.length === 0 ? (
          <EmptyState title="No FAQs yet" description="FAQs will appear here when the client provides them." />
        ) : null}
        {!state.isError && state.items.length > 0 ? (
          <Accordion items={state.items.map((item, index) => ({ id: String(index), title: item.question, content: item.answer }))} />
        ) : null}
      </PageLayout>
    </>
  );
}