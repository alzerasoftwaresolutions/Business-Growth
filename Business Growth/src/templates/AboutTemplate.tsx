import { useConfig } from '../app/useConfig';
import { resolvePageTitle } from '../app/routes';
import { PageSeo } from '../seo/PageSeo';
import { PageLayout } from '../layouts/PageLayout';
import { PageHeaderSection } from '../sections/PageHeaderSection';
import { SplitSection } from '../sections/SplitSection';
import { StatsSection } from '../sections/StatsSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { CTASection } from '../sections/CTASection';
import { CollectionSection } from '../sections/CollectionSection';
import { CardGrid } from '../components/cards/CardGrid';
import { CertificationCard } from '../components/cards/CertificationCard';
import { resolveSectionCta } from './ctaContent';
import { resolveHomeAbout, resolveHomeStats, resolveHomeCertifications } from './homeContent';

/**
 * About template (03 §18, Phase 6 §14). Renders only content-backed bands:
 * profile/story, values, verified statistics, certifications and a configured
 * conversion CTA. Nothing is invented when the configuration is empty.
 */
export function AboutTemplate() {
  const { configs } = useConfig();
  const business = configs.business.business;
  const about = resolveHomeAbout(configs);
  const stats = resolveHomeStats(configs);
  const certifications = resolveHomeCertifications(configs);
  const values = business.values;
  const intro = business.companyProfile.medium || business.companyProfile.short || business.description || undefined;
  const title = resolvePageTitle(configs, 'about');
  const cta = resolveSectionCta(configs);

  return (
    <>
      <PageSeo template="about" />

      <PageLayout>
        <PageHeaderSection title={title} intro={intro} />
      </PageLayout>

      {about ? <SplitSection eyebrow={about.eyebrow} title={about.title} description={about.description} /> : null}

      {values.length > 0 ? <FeaturesSection title="Our values" features={values.map((value) => ({ title: value }))} /> : null}

      {stats.length > 0 ? <StatsSection title="By the numbers" stats={stats} /> : null}

      {certifications.length > 0 ? (
        <CollectionSection title="Certifications" isEmpty={false}>
          <CardGrid columns={3}>
            {certifications.map((certification) => (
              <CertificationCard key={certification.name} certification={certification} />
            ))}
          </CardGrid>
        </CollectionSection>
      ) : null}

      <CTASection heading="Get in touch" primaryCta={cta.primaryCta} secondaryCta={cta.secondaryCta} />
    </>
  );
}