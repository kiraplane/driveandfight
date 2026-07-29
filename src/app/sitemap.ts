import { guides } from '@/data/driveandfight/guides';
import type { MetadataRoute } from 'next';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  '/',
  '/codes',
  '/truck-upgrades',
  '/trailers',
  '/weapons-and-armor',
  '/skills',
  '/air-drops',
  '/guides',
  '/updates',
  '/official-links',
  '/privacy',
  '/terms',
  '/cookie',
  '/disclaimer',
];

const routes = [
  ...coreRoutes,
  ...guides.map((guide) => `/guides/${guide.slug}`),
];

const lastModified = new Date('2026-07-29T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalBaseUrl();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency:
      route === '/' || route === '/codes' || route === '/updates'
        ? 'daily'
        : 'weekly',
    priority:
      route === '/'
        ? 1
        : route === '/codes' || route === '/guides'
          ? 0.9
          : route.startsWith('/guides/')
            ? 0.8
            : 0.75,
  }));
}
