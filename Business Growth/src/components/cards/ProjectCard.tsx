import type { ProjectSummary } from '../types';
import { Card } from './Card';
import { CardMedia, CardBody, CardEyebrow, CardTitle, CardText } from './CardParts';
import { MetadataList } from '../common/MetadataList';

interface ProjectCardProps {
  project: ProjectSummary;
  ctaLabel?: string;
}

/**
 * Project card (04 §22, §35). Imagery is the visual priority; location/year
 * appear as metadata when provided.
 */
export function ProjectCard({ project, ctaLabel = 'View project' }: ProjectCardProps) {
  const metadata = project.metadata ?? [];
  return (
    <Card href={project.href}>
      {project.image ? <CardMedia image={project.image} /> : null}
      <CardBody>
        {project.category ? <CardEyebrow>{project.category}</CardEyebrow> : null}
        <CardTitle>{project.title}</CardTitle>
        {project.shortDescription ? <CardText>{project.shortDescription}</CardText> : null}
        {metadata.length > 0 ? <MetadataList items={metadata} /> : null}
        {project.href ? (
          <span className="mt-auto text-sm font-medium text-blue-600 group-hover:underline">{ctaLabel} →</span>
        ) : null}
      </CardBody>
    </Card>
  );
}