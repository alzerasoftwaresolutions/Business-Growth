export * from './project';
export * from './business';
export * from './features';
export * from './navigation';
export * from './contact';
export * from './seo';
export * from './analytics';

import type { ProjectConfig } from './project';
import type { BusinessConfig } from './business';
import type { FeaturesConfig } from './features';
import type { NavigationConfig } from './navigation';
import type { ContactConfig } from './contact';
import type { SeoConfig } from './seo';
import type { AnalyticsConfig } from './analytics';

/** Union of every configuration contract consumed by the app. */
export interface PackageConfigs {
  project: ProjectConfig;
  business: BusinessConfig;
  features: FeaturesConfig;
  navigation: NavigationConfig;
  contact: ContactConfig;
  seo: SeoConfig;
  analytics: AnalyticsConfig;
}
