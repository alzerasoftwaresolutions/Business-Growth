import { useMemo } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import type { PageTemplate } from '../app/routes';
import { useConfig } from '../app/useConfig';
import { PageSeo } from '../seo/PageSeo';
import { ListingLayout } from '../layouts/ListingLayout';
import { Grid } from '../components/common/Grid';
import { EmptyState } from '../components/feedback/EmptyState';
import { Alert } from '../components/feedback/Alert';
import { Select } from '../components/forms/Select';
import { Pagination } from '../components/navigation/Pagination';
import { CategoriesSection } from '../sections/CategoriesSection';
import { useCollection } from '../content/useCollection';
import { parseCollectionQuery, SORT_PARAM } from '../content/query';
import { resolveTemplateBreadcrumbs } from '../site/breadcrumbs';
import { resolveListingConfig } from './listingContent';

type ListingTemplateType = Extract<
  PageTemplate,
  'services' | 'products' | 'productCategories' | 'projects' | 'blog' | 'testimonials' | 'certifications' | 'team' | 'partners' | 'locations'
>;

export type { ListingTemplateType };

interface ListingTemplateProps {
  template: ListingTemplateType;
}

/**
 * Reusable listing template (03 §21-§41, Phase 6 §12). One architecture serves
 * every content collection: page header → optional category nav → optional
 * filter/sort controls → optional result summary → collection grid → empty or
 * error state → pagination. Optional bands render only when their config/data
 * exists. The data source stays behind the collection boundary.
 */
export function ListingTemplate({ template }: ListingTemplateProps) {
  const { configs } = useConfig();
  const location = useLocation();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const config = useMemo(() => resolveListingConfig(configs, template), [configs, template]);

  const query = useMemo(() => {
    const parsed = parseCollectionQuery(searchParams, {
      defaultPageSize: config.source.pageSize,
      allowedCategories: config.allowedCategories,
      allowedSorts: config.allowedSorts,
    });
    // Category routes (e.g. /products/category/:slug) pin the category.
    if (params.slug && template === 'productCategories') {
      return { ...parsed, category: params.slug };
    }
    return parsed;
  }, [searchParams, config.source.pageSize, config.allowedCategories, config.allowedSorts, params.slug, template]);

  const state = useCollection(config.source, query);
  const breadcrumbs = resolveTemplateBreadcrumbs(configs, template);

  const updateParams = (updates: Record<string, string | undefined>) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined || value === '') {
        next.delete(key);
      } else {
        next.set(key, value);
      }
    });
    setSearchParams(next);
  };

  const hasControls = (config.sortOptions?.length ?? 0) > 0 || (config.filters?.length ?? 0) > 0;
  const hasError = state.isError;
  const isEmpty = !hasError && state.items.length === 0;

  return (
    <>
      <PageSeo template={template} overrides={{ breadcrumbs }} />

      <ListingLayout
        breadcrumbs={breadcrumbs}
        title={config.title}
        intro={config.intro}
        categoryNav={
          config.categories && config.categories.length > 0 ? (
            <CategoriesSection categories={config.categories} pathname={location.pathname} />
          ) : undefined
        }
        controls={
          hasControls ? (
            <div className="flex flex-wrap items-center gap-3">
              {config.sortOptions && config.sortOptions.length > 0 ? (
                <Select
                  name="sort"
                  aria-label="Sort results"
                  value={state.sort ?? ''}
                  onChange={(event) => updateParams({ [SORT_PARAM]: event.target.value })}
                >
                  <option value="">Default</option>
                  {config.sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              ) : null}
              {config.filters?.map((filter) => (
                <Select
                  key={filter.name}
                  name={filter.name}
                  aria-label={filter.label}
                  value={state.filters[filter.name] ?? ''}
                  onChange={(event) => updateParams({ [filter.name]: event.target.value })}
                >
                  <option value="">{filter.label}</option>
                  {filter.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              ))}
            </div>
          ) : undefined
        }
        summary={
          state.totalCount > 0 && !hasError ? (
            <p className="text-sm text-slate-500">
              Showing {state.items.length} of {state.totalCount}
            </p>
          ) : undefined
        }
        emptyState={
          isEmpty ? <EmptyState title={config.emptyStateTitle} description={config.emptyStateDescription} /> : undefined
        }
        pagination={
          !hasError && state.totalPages > 1 ? (
            <Pagination page={state.page} totalPages={state.totalPages} basePath={location.pathname} searchParams={searchParams} />
          ) : undefined
        }
      >
        {hasError ? (
          <Alert variant="error" title="Failed to load this collection">
            {state.errorMessage}
          </Alert>
        ) : (
          <Grid columns={config.columns}>
            {state.items.map((item, index) => (
              <div key={index}>{config.renderItem(item, index)}</div>
            ))}
          </Grid>
        )}
      </ListingLayout>
    </>
  );
}