import type { ProductSummary } from '../types';
import { Card } from './Card';
import { CardMedia, CardBody, CardEyebrow, CardTitle, CardText } from './CardParts';
import { MetadataList } from '../common/MetadataList';

export type ProductCardVariant = 'compact' | 'standard';

interface ProductCardProps {
  product: ProductSummary;
  variant?: ProductCardVariant;
  /** Visible label for the detail link, e.g. "View product". */
  ctaLabel?: string;
}

/**
 * Product card (04 §26). Compact shows only title + category + short
 * description; standard also renders image and key metadata. Missing data is
 * never fabricated — optional sections render only when present (04 §83-84).
 */
export function ProductCard({ product, variant = 'standard', ctaLabel = 'View details' }: ProductCardProps) {
  const isCompact = variant === 'compact';
  return (
    <Card href={product.href}>
      {product.image && !isCompact ? <CardMedia image={product.image} /> : null}
      <CardBody>
        {product.category ? <CardEyebrow>{product.category}</CardEyebrow> : null}
        <CardTitle>{product.title}</CardTitle>
        {product.shortDescription ? <CardText>{product.shortDescription}</CardText> : null}
        {product.metadata && product.metadata.length > 0 ? <MetadataList items={product.metadata} /> : null}
        {product.href ? (
          <span className="mt-auto text-sm font-medium text-blue-600 group-hover:underline">{ctaLabel} →</span>
        ) : null}
      </CardBody>
    </Card>
  );
}