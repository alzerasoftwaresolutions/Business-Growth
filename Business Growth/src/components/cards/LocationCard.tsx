import type { LocationSummary } from '../types';
import { Card } from './Card';
import { CardBody, CardTitle } from './CardParts';

interface LocationCardProps {
  location: LocationSummary;
}

/**
 * Location card (04 §44). Renders address + contact details when present;
 * optional data is never fabricated (05 §19).
 */
export function LocationCard({ location }: LocationCardProps) {
  const addressLine = [location.address, location.city, location.region, location.country]
    .filter(Boolean)
    .join(', ');
  return (
    <Card href={location.href}>
      <CardBody>
        <CardTitle>{location.name}</CardTitle>
        {addressLine ? <p className="text-sm text-slate-600">{addressLine}</p> : null}
        <ul className="mt-1 space-y-1 text-sm text-slate-600">
          {location.phone ? (
            <li>
              <a href={`tel:${location.phone}`} className="text-blue-600 hover:underline">
                Tel: {location.phone}
              </a>
            </li>
          ) : null}
          {location.email ? (
            <li>
              <a href={`mailto:${location.email}`} className="text-blue-600 hover:underline">
                {location.email}
              </a>
            </li>
          ) : null}
          {location.businessHours ? <li className="text-slate-500">{location.businessHours}</li> : null}
        </ul>
        {location.mapUrl ? (
          <a
            href={location.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-auto text-sm font-medium text-blue-600 hover:underline"
          >
            Directions →
          </a>
        ) : null}
      </CardBody>
    </Card>
  );
}