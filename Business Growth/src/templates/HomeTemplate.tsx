import { useConfig } from '../app/useConfig';
import { resolvePageTitle } from '../app/routes';
import { PageSeo } from '../seo/PageSeo';
import { Hero } from '../components/marketing/Hero';
import { PageHeaderSection } from '../sections/PageHeaderSection';
import { PageLayout } from '../layouts/PageLayout';
import { StatsSection } from '../sections/StatsSection';
import { SplitSection } from '../sections/SplitSection';
import { CollectionSection } from '../sections/CollectionSection';
import { CTASection } from '../sections/CTASection';
import { CardGrid } from '../components/cards/CardGrid';
import { CertificationCard } from '../components/cards/CertificationCard';
import { LocationCard } from '../components/cards/LocationCard';
import {
  resolveHomeHero,
  resolveHomeStats,
  resolveHomeAbout,
  resolveHomeCertifications,
  resolveHomeLocations,
  resolveHomeCta,
} from './homeContent';

/**
 * Configurable Home template (03 §8-§15, Phase 6 §14). Composes sections only
 * when the configuration/content backs them — it never becomes an
 * industry-specific homepage. Each section carries its own content.
 */
export function HomeTemplate() {
  const { configs } = useConfig();
  const hero = resolveHomeHero(configs);
  const stats = resolveHomeStats(configs);
  const about = resolveHomeAbout(configs);
  const certifications = resolveHomeCertifications(configs);
  const locations = resolveHomeLocations(configs);
  const cta = resolveHomeCta(configs);

  return (
    <>
      <PageSeo template="home" />

      {hero ? (
        <Hero
          eyebrow="Welcome"
          headline={hero.headline}
          subheadline={hero.subheadline}
          primaryCta={cta?.primaryCta}
          secondaryCta={cta?.secondaryCta}
        />
      ) : (
        <PageLayout>
          <PageHeaderSection title={resolvePageTitle(configs, 'home')} />
        </PageLayout>
      )}

      {stats.length > 0 ? <StatsSection title="By the numbers" stats={stats} /> : null}

      {about ? <SplitSection eyebrow={about.eyebrow} title={about.title} description={about.description} /> : null}

      {certifications.length > 0 ? (
        <CollectionSection title="Certifications" isEmpty={false}>
          <CardGrid columns={3}>
            {certifications.map((certification) => (
              <CertificationCard key={certification.name} certification={certification} />
            ))}
          </CardGrid>
        </CollectionSection>
      ) : null}

      {locations.length > 0 ? (
        <CollectionSection title="Locations" isEmpty={false}>
          <CardGrid columns={3}>
            {locations.map((location) => (
              <LocationCard key={location.name} location={location} />
            ))}
          </CardGrid>
        </CollectionSection>
      ) : null}

      {cta ? <CTASection heading={cta.heading} primaryCta={cta.primaryCta} secondaryCta={cta.secondaryCta} /> : null}
    </>
  );
}