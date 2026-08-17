import type { CertificationSummary } from '../types';
import { Card } from './Card';
import { CardBody, CardEyebrow, CardTitle } from './CardParts';

interface CertificationCardProps {
  certification: CertificationSummary;
}

/**
 * Certification card (04 §25, §54). Only verified information is displayed
 * (05 §26). When a verification URL exists, the card becomes a link.
 */
export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card href={certification.verificationUrl}>
      <CardBody>
        {certification.issuer ? <CardEyebrow>{certification.issuer}</CardEyebrow> : null}
        <CardTitle>{certification.name}</CardTitle>
        {certification.verificationUrl ? (
          <span className="mt-auto text-sm font-medium text-blue-600 group-hover:underline">Verify →</span>
        ) : null}
      </CardBody>
    </Card>
  );
}