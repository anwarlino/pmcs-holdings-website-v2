import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', ...locales.map((locale) => `/${locale}/`)];

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: new Date('2026-06-04'),
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
