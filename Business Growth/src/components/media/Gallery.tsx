import { useState } from 'react';
import type { GalleryItem } from '../types';
import { Image } from './Image';

interface GalleryProps {
  images: GalleryItem[];
}

/**
 * Responsive image gallery (04 §27, §63). Main image + selectable thumbnails.
 * Only the selected image loads; thumbnails remain lightweight (08 §15). The
 * advanced lightbox is a later capability — this is the reusable foundation.
 */
export function Gallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[Math.min(activeIndex, images.length - 1)];

  return (
    <figure className="flex flex-col gap-3">
      <Image image={activeImage} loading="eager" ratio="16/9" className="aspect-[16/9]" />
      {images.length > 1 ? (
        <div role="group" aria-label="Image selection" className="flex flex-wrap gap-2">
          {images.map((image, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                aria-label={`View image ${index + 1} of ${images.length}`}
                aria-current={selected}
                onClick={() => setActiveIndex(index)}
                className={`h-16 w-20 overflow-hidden rounded-md border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  selected ? 'border-blue-600' : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <Image image={image} loading="lazy" ratio="4/3" className="aspect-[4/3] h-full w-full" />
              </button>
            );
          })}
        </div>
      ) : null}
    </figure>
  );
}