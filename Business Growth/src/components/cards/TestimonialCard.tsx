import type { Testimonial } from '../types';
import { Card } from './Card';
import { CardBody } from './CardParts';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * Testimonial card (04 §24, §54). Quote-first structure; name/role/company
 * appear only when approved content exists (05 §25).
 */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card>
      <CardBody>
        <blockquote className="flex-1">
          <p className="text-base text-slate-800">“{testimonial.quote}”</p>
        </blockquote>
        <figcaption className="mt-4">
          <p className="text-sm font-semibold text-slate-900">{testimonial.personName}</p>
          {testimonial.personRole || testimonial.companyName ? (
            <p className="text-sm text-slate-500">
              {[testimonial.personRole, testimonial.companyName].filter(Boolean).join(', ')}
            </p>
          ) : null}
        </figcaption>
      </CardBody>
    </Card>
  );
}