import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/src/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;

  const lastModified = new Date();

  return [
    {
      url: base,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/author`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/org`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
