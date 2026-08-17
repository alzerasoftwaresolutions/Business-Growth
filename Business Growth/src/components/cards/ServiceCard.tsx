import type { ServiceSummary } from '../types';
import { Card } from './Card';
import { CardMedia, CardBody, CardEyebrow, CardTitle, CardText } from './CardParts';

interface ServiceCardProps {
  service: ServiceSummary;
  ctaLabel?: string;
}

/**
 * Service card (04 §21, §31). Shows icon or image, category, title and short
 * description. Content-driven; optional data renders only when provided.
 */
export function ServiceCard({ service, ctaLabel = 'View details' }: ServiceCardProps) {
  return (
    <Card href={service.href}>
      {service.image ? <CardMedia image={service.image} /> : null}
      <CardBody>
        {service.category ? <CardEyebrow>{service.category}</CardEyebrow> : null}
        <CardTitle>{service.title}</CardTitle>
        {service.shortDescription ? <CardText>{service.shortDescription}</CardText> : null}
        {service.href ? (
          <span className="mt-auto text-sm font-medium text-blue-600 group-hover:underline">{ctaLabel} →</span>
        ) : null}
      </CardBody>
    </Card>
  );
}