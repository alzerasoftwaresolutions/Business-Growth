import type { CSSProperties } from 'react';
import type { MediaImage } from '../types';
import { AspectRatio } from '../common/AspectRatio';

interface ImageProps {
  image: MediaImage;
  /** Lazy loading for below-the-fold imagery (08 §13, §16). */
  loading?: 'lazy' | 'eager';
  /** Preserve aspect ratio when width/height are unknown. */
  ratio?: string;
  className?: string;
}

/**
 * Semantic image (04 §63, 05 §93). `alt` is required by the MediaImage model.
 * Reserves layout space (width/height attributes or an aspect-ratio box) to
 * minimize CLS (08 §83) and honors the focal point via `object-position`.
 */
export function Image({ image, loading = 'lazy', ratio, className = '' }: ImageProps) {
  const style: CSSProperties | undefined = image.focalPoint
    ? { objectPosition: `${image.focalPoint.x * 100}% ${image.focalPoint.y * 100}%` }
    : undefined;

  const img = (
    <img
      src={image.src}
      alt={image.alt}
      loading={loading}
      width={image.width}
      height={image.height}
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
      style={style}
    />
  );

  if (image.width && image.height) {
    return img;
  }
  return <AspectRatio ratio={ratio ?? '16/9'}>{img}</AspectRatio>;
}