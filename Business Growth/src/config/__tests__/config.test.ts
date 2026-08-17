import { describe, expect, it } from 'vitest';

import projectRaw from '../../../configuration/project.config.json';
import businessRaw from '../../../configuration/business.config.json';
import featuresRaw from '../../../configuration/features.config.json';
import navigationRaw from '../../../configuration/navigation.config.json';
import contactRaw from '../../../configuration/contact.config.json';
import seoRaw from '../../../configuration/seo.config.json';
import analyticsRaw from '../../../configuration/analytics.config.json';

import { validateWithSchema, validateConfigs, checkConsistency } from '../index';
import type { PackageConfigs } from '../../types';
import type { ConfigIssue } from '../errors';

const RAW = {
  project: projectRaw,
  business: businessRaw,
  features: featuresRaw,
  navigation: navigationRaw,
  contact: contactRaw,
  seo: seoRaw,
  analytics: analyticsRaw,
} as const;

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const errorCount = (issues: ConfigIssue[]): number =>
  issues.filter((issue) => issue.level === 'error').length;

const expectNoErrors = (issues: ConfigIssue[]) => {
  expect(errorCount(issues)).toBe(0);
};

const asRecord = (value: unknown): Record<string, unknown> =>
  value as unknown as Record<string, unknown>;

const bundle = (): PackageConfigs => clone(RAW) as unknown as PackageConfigs;

describe('config test matrix', () => {
  it('A — all seven authoritative configs pass schema validation', () => {
    for (const [key, raw] of Object.entries(RAW) as Array<[string, unknown]>) {
      const issues = validateWithSchema(key as Parameters<typeof validateWithSchema>[0], raw);
      expectNoErrors(issues);
      expect(issues.filter((issue) => issue.level === 'error')).toEqual([]);
    }
  });

  it('A — full bundle validates with no errors (informational warnings only)', () => {
    const result = validateConfigs(bundle());
    expect(result.valid).toBe(true);
    expect(errorCount(result.issues)).toBe(0);
  });

  it('B — missing required property fails', () => {
    const project = asRecord(clone(RAW.project));
    delete project.client;
    const issues = validateWithSchema('project', project);
    expect(errorCount(issues)).toBeGreaterThan(0);
  });

  it('C — wrong primitive type fails', () => {
    const navigation = asRecord(clone(RAW.navigation));
    navigation.navigation = 'yes';
    const issues = validateWithSchema('navigation', navigation);
    expect(errorCount(issues)).toBeGreaterThan(0);
  });

  it('D — invalid enum value fails', () => {
    const project = asRecord(clone(RAW.project));
    const website = asRecord(project.website);
    website.environment = 'prod';
    const issues = validateWithSchema('project', project);
    expect(errorCount(issues)).toBeGreaterThan(0);
  });

  it('E — invalid nested object fails', () => {
    const seo = asRecord(clone(RAW.seo));
    const seoNode = asRecord(seo.seo);
    const indexing = asRecord(seoNode.indexing);
    const environmentRules = asRecord(indexing.environmentRules);
    const production = asRecord(environmentRules.production);
    production.index = 'yes';
    const issues = validateWithSchema('seo', seo);
    expect(errorCount(issues)).toBeGreaterThan(0);
  });

  it('F — invalid array item fails', () => {
    const navigation = asRecord(clone(RAW.navigation));
    const footer = asRecord(navigation.footer);
    const columns = footer.columns as Array<Record<string, unknown>>;
    const items = columns[0].items as Array<Record<string, unknown>>;
    items[0].href = 42;
    const issues = validateWithSchema('navigation', navigation);
    expect(errorCount(issues)).toBeGreaterThan(0);
  });

  it('G — unexpected property fails (additionalProperties: false)', () => {
    const project = asRecord(clone(RAW.project));
    const website = asRecord(project.website);
    website.extraProperty = true;
    const issues = validateWithSchema('project', project);
    expect(errorCount(issues)).toBeGreaterThan(0);
  });

  it('H — optional property omitted passes', () => {
    const contact = asRecord(clone(RAW.contact));
    const form = asRecord(contact.contactForm);
    const fields = form.fields as Array<Record<string, unknown>>;
    delete fields[0].placeholder;
    expectNoErrors(validateWithSchema('contact', contact));
  });

  it('I — empty template content is valid (reusable template state)', () => {
    const business = asRecord(clone(RAW.business));
    const businessNode = asRecord(business.business);
    businessNode.legalName = '';
    businessNode.displayName = '';
    businessNode.shortName = '';
    businessNode.tagline = '';
    businessNode.description = '';
    expectNoErrors(validateWithSchema('business', business));
  });

  it('J — feature-disabled configuration is valid', () => {
    const features = asRecord(clone(RAW.features));
    const featuresNode = asRecord(features.features);
    const pages = asRecord(featuresNode.pages);
    const team = asRecord(pages.team);
    team.enabled = false;
    const locations = asRecord(pages.locations);
    locations.enabled = false;
    locations.multipleLocations = false;
    expectNoErrors(validateWithSchema('features', features));
  });

  it('K — feature-enabled configuration is valid', () => {
    const features = asRecord(clone(RAW.features));
    const featuresNode = asRecord(features.features);
    const pages = asRecord(featuresNode.pages);
    const team = asRecord(pages.team);
    team.enabled = true;
    expectNoErrors(validateWithSchema('features', features));
  });

  it('L — navigation must not link to a disabled page', () => {
    const configs = bundle();
    const teamItem = configs.navigation.footer.columns[0].items.find(
      (item) => item.href === '/team'
    );
    expect(teamItem).toBeDefined();
    if (teamItem) {
      teamItem.enabled = true;
    }
    const issues = checkConsistency(configs);
    expect(
      issues.some((issue) => issue.message.includes('/team') && issue.level === 'error')
    ).toBe(true);
  });

  it('L — feature dependencies must be satisfied', () => {
    const configs = bundle();
    configs.features.features.leadGeneration.contactForm.enabled = false;
    const issues = checkConsistency(configs);
    expect(
      issues.some((issue) => issue.path.includes('featureDependencies.rfq'))
    ).toBe(true);
  });

  it('L — valid bundle has no consistency errors', () => {
    expectNoErrors(checkConsistency(bundle()));
  });
});