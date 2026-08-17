import LegalPage from '../components/LegalPage';
import { usePageMeta } from '../lib/usePageMeta';
import { pageMeta } from '../data/meta';
import { privacyPolicy } from '../data/legal';

export default function Privacy() {
  usePageMeta(pageMeta.privacy);

  return <LegalPage content={privacyPolicy} />;
}
