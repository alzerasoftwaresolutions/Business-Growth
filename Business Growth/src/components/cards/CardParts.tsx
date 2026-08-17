import type { ReactNode } from 'react';
import type { MediaImage } from '../types';
import { Image } from '../media/Image';

/** Full-bleed card media area. */
export function CardMedia({ image }: { image: MediaImage }) {
  return (
    <div className="relative">
      <Image image={image} loading="lazy" ratio="16/9" className="aspect-[16/9]" />
    </div>
  );
}

/** Card content padding + footer spacing. */
export function CardBody({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 flex-col gap-3 p-5">{children}</div>;
}

/** Small uppercase category label used across cards. */
export function CardEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{children}</p>;
}

/** Card title line. */
export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-slate-900">{children}</h3>;
}

/** Secondary card text. */
export function CardText({ children }: { children: ReactNode }) {
  return <p className="text-sm text-slate-600">{children}</p>;
}