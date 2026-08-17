import type { ReactNode } from 'react';
import type { MediaImage } from '../types';
import { Image } from '../media/Image';

interface FeaturedContentProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: MediaImage;
  /** Reusable action slot (e.g. Button, LeadCTA). */
  action?: ReactNode;
  /** When true, the image renders on the opposite side (desktop). */
  flip?: boolean;
}

/**
 * Split image + content feature block (04 §9, §46). Used for "Why us",
 * showcase and story sections. Content is entirely caller-supplied.
 */
export function FeaturedContent({ eyebrow, title, description, image, action, flip = false }: FeaturedContentProps) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
      {image ? (
        <div className={`lg:w-1/2 ${flip ? 'lg:order-2' : ''}`}>
          <Image image={image} loading="lazy" ratio="16/10" className="aspect-[16/10]" />
        </div>
      ) : null}
      <div className={`flex flex-col gap-4 lg:w-1/2 ${flip ? 'lg:order-1' : ''}`}>
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{eyebrow}</p> : null}
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
        {description ? <p className="text-base text-slate-600">{description}</p> : null}
        {action ? <div className="mt-2">{action}</div> : null}
      </div>
    </div>
  );
}