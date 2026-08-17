import { Section } from '../components/common/Section';
import { SectionHeader } from '../components/common/SectionHeader';
import { SiteLink } from '../site/SiteLink';
import { isCurrentPath } from '../site/navigation';

export interface CategoryChip {
  label: string;
  href: string;
}

interface CategoriesSectionProps {
  title?: string;
  categories: CategoryChip[];
  pathname?: string;
}

/**
 * Category navigation band for category-aware listing templates (Phase 6
 * §12.5). Renders plain links (never the ARIA tabs pattern — these navigate
 * to routes). Categories come from the content model/configuration, never
 * hardcoded.
 */
export function CategoriesSection({ title, categories, pathname }: CategoriesSectionProps) {
  if (categories.length === 0) {
    return null;
  }
  return (
    <Section>
      {title ? <SectionHeader heading={title} /> : null}
      <nav aria-label="Categories" className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => {
          const current = pathname ? isCurrentPath(pathname, category.href) : false;
          return (
            <SiteLink
              key={category.href}
              href={category.href}
              ariaCurrent={current ? 'page' : undefined}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                current ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {category.label}
            </SiteLink>
          );
        })}
      </nav>
    </Section>
  );
}