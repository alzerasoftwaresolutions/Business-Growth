import LegalPage from '../components/LegalPage';
import { usePageMeta } from '../lib/usePageMeta';
import { pageMeta } from '../data/meta';
import { termsOfService } from '../data/legal';

export default function Terms() {
  usePageMeta(pageMeta.terms);

  return <LegalPage content={termsOfService} />;
}
