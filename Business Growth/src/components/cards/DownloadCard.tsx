import type { DownloadItem } from '../types';
import { Card } from './Card';
import { CardBody, CardEyebrow, CardTitle, CardText } from './CardParts';

interface DownloadCardProps {
  download: DownloadItem;
  ctaLabel?: string;
}

/**
 * Downloadable-resource card (04 §26, §30, §57). Shows document type, title,
 * description and optional file size. Downloads never block page rendering.
 */
export function DownloadCard({ download, ctaLabel = 'Download' }: DownloadCardProps) {
  return (
    <Card>
      <CardBody>
        <div className="flex items-center gap-2">
          {download.type ? <CardEyebrow>{download.type}</CardEyebrow> : null}
          {download.size ? <span className="text-xs text-slate-500">{download.size}</span> : null}
        </div>
        <CardTitle>{download.title}</CardTitle>
        {download.description ? <CardText>{download.description}</CardText> : null}
        <a
          href={download.url}
          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
        >
          {ctaLabel} ↓
        </a>
      </CardBody>
    </Card>
  );
}