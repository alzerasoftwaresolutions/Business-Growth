import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { TEMPLATE_LABELS, type PageTemplate } from '../app/routes';
import { useConfig } from '../app/useConfig';
import { PageSeo } from '../seo/PageSeo';
import { DetailLayout } from '../layouts/DetailLayout';
import { Alert } from '../components/feedback/Alert';
import { EmptyState } from '../components/feedback/EmptyState';
import { Section } from '../components/common/Section';
import { SectionHeader } from '../components/common/SectionHeader';
import { CardGrid } from '../components/cards/CardGrid';
import { Gallery } from '../components/media/Gallery';
import { MetadataList } from '../components/common/MetadataList';
import { SpecificationTable } from '../components/data-display/SpecificationTable';
import { DownloadCard } from '../components/cards/DownloadCard';
import { FeaturesSection } from '../sections/FeaturesSection';
import { TimelineSection } from '../sections/TimelineSection';
import { CTASection } from '../sections/CTASection';
import { resolveTemplateBreadcrumbs } from '../site/breadcrumbs';
import { createEmptyDetailSource, useDetail, type DetailState } from '../content/detail';
import { resolveSectionCta } from './ctaContent';
import type {
  Feature,
  Specification,
  DownloadItem,
  GalleryItem,
  ServiceSummary,
  ProductSummary,
  ProjectSummary,
  ArticleSummary,
  LocationSummary,
  MediaImage,
} from '../components/types';

interface DetailShellProps<T> {
  template: PageTemplate;
  title: string;
  state: DetailState<T>;
  children: ReactNode;
  aside?: ReactNode;
}

/**
 * Shared detail shell: page SEO, breadcrumbs and the honest empty/error states.
 * The children (content sections) render only when a real item exists.
 */
function DetailShell<T>({ template, title, state, children, aside }: DetailShellProps<T>) {
  const { configs } = useConfig();
  const breadcrumbs = resolveTemplateBreadcrumbs(configs, template);

  return (
    <>
      <PageSeo template={template} overrides={{ breadcrumbs }} />
      <DetailLayout breadcrumbs={breadcrumbs} title={title} aside={aside}>
        {state.isError ? (
          <Alert variant="error" title="Failed to load this content">
            {state.errorMessage}
          </Alert>
        ) : state.item ? (
          children
        ) : (
          <EmptyState
            title="Content not yet available"
            description="This content will appear here when the client provides it."
          />
        )}
      </DetailLayout>
    </>
  );
}

interface ServiceDetailContent extends ServiceSummary {
  gallery?: GalleryItem[];
  features?: Feature[];
  downloads?: DownloadItem[];
}

const serviceSource = createEmptyDetailSource<ServiceDetailContent>();

export function ServiceDetailTemplate() {
  const { slug } = useParams();
  const state = useDetail(serviceSource, slug ?? '');
  const cta = resolveSectionCta(useConfig().configs);
  return (
    <DetailShell template="serviceDetails" title={state.item?.title ?? TEMPLATE_LABELS.serviceDetails} state={state}>
      {state.item ? (
        <>
          {state.item.image ? <Gallery images={[state.item.image]} /> : null}
          {state.item.gallery?.length ? <Gallery images={state.item.gallery} /> : null}
          {state.item.shortDescription ? <p className="max-w-3xl text-slate-600">{state.item.shortDescription}</p> : null}
          {state.item.features?.length ? <FeaturesSection title="Features" features={state.item.features} /> : null}
          {state.item.downloads?.length ? (
            <Section>
              <SectionHeader heading="Downloads" />
              <div className="mt-6">
                <CardGrid columns={3}>
                  {state.item.downloads.map((download) => (
                    <DownloadCard key={download.title} download={download} />
                  ))}
                </CardGrid>
              </div>
            </Section>
          ) : null}
          <CTASection heading="Get in touch" primaryCta={cta.primaryCta} secondaryCta={cta.secondaryCta} />
        </>
      ) : null}
    </DetailShell>
  );
}

interface ProductDetailContent extends ProductSummary {
  gallery?: GalleryItem[];
  features?: Feature[];
  specifications?: Specification[];
  downloads?: DownloadItem[];
}

const productSource = createEmptyDetailSource<ProductDetailContent>();

export function ProductDetailTemplate() {
  const { slug } = useParams();
  const state = useDetail(productSource, slug ?? '');
  const cta = resolveSectionCta(useConfig().configs);
  return (
    <DetailShell
      template="productDetails"
      title={state.item?.title ?? TEMPLATE_LABELS.productDetails}
      state={state}
      aside={state.item?.metadata?.length ? <MetadataList items={state.item.metadata} /> : undefined}
    >
      {state.item ? (
        <>
          {state.item.gallery?.length ? <Gallery images={state.item.gallery} /> : null}
          {state.item.shortDescription ? <p className="max-w-3xl text-slate-600">{state.item.shortDescription}</p> : null}
          {state.item.features?.length ? <FeaturesSection title="Features" features={state.item.features} /> : null}
          {state.item.specifications?.length ? (
            <Section>
              <SectionHeader heading="Specifications" />
              <div className="mt-6">
                <SpecificationTable specifications={state.item.specifications} />
              </div>
            </Section>
          ) : null}
          {state.item.downloads?.length ? (
            <Section>
              <SectionHeader heading="Downloads" />
              <div className="mt-6">
                <CardGrid columns={3}>
                  {state.item.downloads.map((download) => (
                    <DownloadCard key={download.title} download={download} />
                  ))}
                </CardGrid>
              </div>
            </Section>
          ) : null}
          <CTASection heading="Get in touch" primaryCta={cta.primaryCta} secondaryCta={cta.secondaryCta} />
        </>
      ) : null}
    </DetailShell>
  );
}

interface ProjectDetailContent extends ProjectSummary {
  gallery?: GalleryItem[];
  timeline?: { year: string; title: string; description?: string }[];
  downloads?: DownloadItem[];
  image?: MediaImage;
}

const projectSource = createEmptyDetailSource<ProjectDetailContent>();

export function ProjectDetailTemplate() {
  const { slug } = useParams();
  const state = useDetail(projectSource, slug ?? '');
  const cta = resolveSectionCta(useConfig().configs);
  return (
    <DetailShell
      template="projectDetails"
      title={state.item?.title ?? TEMPLATE_LABELS.projectDetails}
      state={state}
      aside={state.item?.metadata?.length ? <MetadataList items={state.item.metadata} /> : undefined}
    >
      {state.item ? (
        <>
          {state.item.gallery?.length ? <Gallery images={state.item.gallery} /> : null}
          {state.item.shortDescription ? <p className="max-w-3xl text-slate-600">{state.item.shortDescription}</p> : null}
          {state.item.timeline?.length ? <TimelineSection title="Project timeline" items={state.item.timeline} /> : null}
          {state.item.downloads?.length ? (
            <Section>
              <SectionHeader heading="Downloads" />
              <div className="mt-6">
                <CardGrid columns={3}>
                  {state.item.downloads.map((download) => (
                    <DownloadCard key={download.title} download={download} />
                  ))}
                </CardGrid>
              </div>
            </Section>
          ) : null}
          <CTASection heading="Get in touch" primaryCta={cta.primaryCta} secondaryCta={cta.secondaryCta} />
        </>
      ) : null}
    </DetailShell>
  );
}

interface ArticleDetailContent extends ArticleSummary {
  body?: string;
}

const articleSource = createEmptyDetailSource<ArticleDetailContent>();

export function ArticleDetailTemplate() {
  const { slug } = useParams();
  const state = useDetail(articleSource, slug ?? '');
  const cta = resolveSectionCta(useConfig().configs);
  const metadata = [
    ...(state.item?.author ? [{ label: 'Author', value: state.item.author }] : []),
    ...(state.item?.publishedDate ? [{ label: 'Published', value: state.item.publishedDate }] : []),
    ...(state.item?.category ? [{ label: 'Category', value: state.item.category }] : []),
  ];
  return (
    <DetailShell
      template="blogDetails"
      title={state.item?.title ?? TEMPLATE_LABELS.blogDetails}
      state={state}
      aside={metadata.length > 0 ? <MetadataList items={metadata} /> : undefined}
    >
      {state.item ? (
        <>
          {state.item.featuredImage ? <Gallery images={[state.item.featuredImage]} /> : null}
          {state.item.excerpt ? <p className="max-w-3xl text-lg text-slate-600">{state.item.excerpt}</p> : null}
          {state.item.body ? <p className="max-w-3xl text-slate-600">{state.item.body}</p> : null}
          <CTASection heading="Get in touch" primaryCta={cta.primaryCta} secondaryCta={cta.secondaryCta} />
        </>
      ) : null}
    </DetailShell>
  );
}

interface LocationDetailContent extends LocationSummary {
  mapEmbedUrl?: string;
}

const locationSource = createEmptyDetailSource<LocationDetailContent>();

export function LocationDetailTemplate() {
  const { slug } = useParams();
  const state = useDetail(locationSource, slug ?? '');
  const cta = resolveSectionCta(useConfig().configs);
  return (
    <DetailShell
      template="locationDetails"
      title={state.item?.name ?? TEMPLATE_LABELS.locationDetails}
      state={state}
      aside={state.item ? <MetadataList items={locationMetadata(state.item)} /> : undefined}
    >
      {state.item ? (
        <>
          <p className="max-w-3xl text-slate-600">
            {[state.item.address, state.item.city, state.item.region, state.item.country].filter(Boolean).join(', ') || 'Address not yet available'}
          </p>
          {state.item.mapUrl ? (
            <Section>
              <SectionHeader heading="Find us" />
              <div className="mt-6">
                <a
                  href={state.item.mapUrl}
                  className="inline-flex text-sm font-medium text-blue-600 hover:underline"
                >
                  Open map ↗
                </a>
              </div>
            </Section>
          ) : null}
          <CTASection heading="Get in touch" primaryCta={cta.primaryCta} secondaryCta={cta.secondaryCta} />
        </>
      ) : null}
    </DetailShell>
  );
}

function locationMetadata(item: LocationSummary): { label: string; value: string }[] {
  const entries: { label: string; value: string }[] = [];
  if (item.phone) {
    entries.push({ label: 'Phone', value: item.phone });
  }
  if (item.email) {
    entries.push({ label: 'Email', value: item.email });
  }
  if (item.businessHours) {
    entries.push({ label: 'Hours', value: item.businessHours });
  }
  return entries;
}