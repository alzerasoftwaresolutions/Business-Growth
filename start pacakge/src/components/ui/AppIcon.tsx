import {
  Lightbulb,
  Ruler,
  Shield,
  BarChart,
  Target,
  Leaf,
  Building2,
  Factory,
  Route as RouteIcon,
  Stethoscope,
  GraduationCap,
  Landmark,
  Hotel,
  ArrowRight,
  Check,
  Cog,
  Layers,
  RefreshCw,
  MapPin,
  Wrench,
  Grid3X3,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  lightbulb: Lightbulb,
  ruler: Ruler,
  shield: Shield,
  chart: BarChart,
  target: Target,
  leaf: Leaf,
  commercial: Building2,
  industrial: Factory,
  infrastructure: RouteIcon,
  healthcare: Stethoscope,
  education: GraduationCap,
  government: Landmark,
  hospitality: Hotel,
  arrowRight: ArrowRight,
  check: Check,
  building: Building2,
  cog: Cog,
  layers: Layers,
  refresh: RefreshCw,
  map: MapPin,
  wrench: Wrench,
  grid: Grid3X3,
};

interface AppIconProps extends LucideProps {
  name: keyof typeof iconMap | string;
}

export default function AppIcon({ name, ...props }: AppIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}