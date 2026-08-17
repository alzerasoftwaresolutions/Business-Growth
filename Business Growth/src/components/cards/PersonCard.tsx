import type { PersonSummary } from '../types';
import { Card } from './Card';
import { CardBody, CardEyebrow, CardTitle, CardText } from './CardParts';
import { Image } from '../media/Image';

interface PersonCardProps {
  person: PersonSummary;
}

/**
 * Team/person card (04 §42-§43). One base component serves all sectors —
 * doctor, engineer, consultant, teacher, agent — through typed content, never
 * sector-specific duplicates.
 */
export function PersonCard({ person }: PersonCardProps) {
  return (
    <Card href={person.href}>
      {person.photo ? <Image image={person.photo} ratio="4/3" className="aspect-[4/3]" /> : null}
      <CardBody>
        {person.role ? <CardEyebrow>{person.role}</CardEyebrow> : null}
        <CardTitle>{person.name}</CardTitle>
        {person.department ? <CardText>{person.department}</CardText> : null}
        {person.shortBio ? <CardText>{person.shortBio}</CardText> : null}
        {person.email ? (
          <a href={`mailto:${person.email}`} className="mt-auto text-sm font-medium text-blue-600 hover:underline">
            {person.email}
          </a>
        ) : null}
      </CardBody>
    </Card>
  );
}