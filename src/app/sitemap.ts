import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

const BASE_URL = 'https://docs.lumierelabs.xyz';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = source.getPages();

  const docRoutes: MetadataRoute.Sitemap = pages.map((page) => {
    const isSectionRoot = page.slugs.length <= 1;
    const isDocsIndex = page.slugs.length === 0;

    return {
      url: `${BASE_URL}/docs${page.slugs.length ? `/${page.slugs.join('/')}` : ''}`,
      lastModified: page.data.lastModified
        ? new Date(page.data.lastModified)
        : new Date(),
      changeFrequency: isDocsIndex ? 'weekly' : 'monthly',
      // 1.0 docs index, 0.8 section overview pages (e.g. /docs/moderation),
      // 0.6 everything else (individual feature/command pages)
      priority: isDocsIndex ? 1.0 : isSectionRoot ? 0.8 : 0.6,
    };
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  return [...staticRoutes, ...docRoutes];
}