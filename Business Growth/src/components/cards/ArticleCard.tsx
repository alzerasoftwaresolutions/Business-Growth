import type { ArticleSummary } from '../types';
import { Card } from './Card';
import { CardMedia, CardBody, CardEyebrow, CardTitle, CardText } from './CardParts';

interface ArticleCardProps {
  article: ArticleSummary;
  ctaLabel?: string;
}

/**
 * Blog/news card (04 §23, §56). Quick-scan structure: image, category, date,
 * title, excerpt. Optional fields render only when present.
 */
export function ArticleCard({ article, ctaLabel = 'Read more' }: ArticleCardProps) {
  return (
    <Card href={article.href}>
      {article.featuredImage ? <CardMedia image={article.featuredImage} /> : null}
      <CardBody>
        {article.category || article.publishedDate ? (
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
            {article.category ? <CardEyebrow>{article.category}</CardEyebrow> : null}
            {article.publishedDate ? <span aria-hidden="true">·</span> : null}
            {article.publishedDate ? <time dateTime={article.publishedDate}>{article.publishedDate}</time> : null}
          </div>
        ) : null}
        <CardTitle>{article.title}</CardTitle>
        {article.excerpt ? <CardText>{article.excerpt}</CardText> : null}
        {article.author ? <p className="text-sm text-slate-500">By {article.author}</p> : null}
        {article.href ? (
          <span className="mt-auto text-sm font-medium text-blue-600 group-hover:underline">{ctaLabel} →</span>
        ) : null}
      </CardBody>
    </Card>
  );
}