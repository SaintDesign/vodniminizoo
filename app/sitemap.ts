import type { MetadataRoute } from 'next';
import { allRoutes } from '@/lib/navigation';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const priority: Record<string, number> = {
    '/': 1.0,
    '/o-nas': 0.9,
    '/vzdelavaci-programy': 0.9,
    '/program-svet-vody': 0.9,
    '/vyukovy-program-voda-v-pohybu': 0.9,
    '/kontakt': 0.9,
    '/podpora': 0.8,
    '/fotogalerie': 0.7,
    '/dary': 0.7,
    '/sponzoring': 0.7,
    '/souteze': 0.7,
    '/navstivilinas': 0.6,
    '/projekty-a-vyzvy': 0.6,
    '/navstevni-rad': 0.5,
    '/pravidla-ochrany-soukromi': 0.3,
    '/licence-a-povinne-informace': 0.3,
  };
  const changeFrequency: Record<string, 'weekly' | 'monthly' | 'yearly'> = {
    '/': 'weekly',
    '/fotogalerie': 'weekly',
    '/navstevni-rad': 'yearly',
    '/pravidla-ochrany-soukromi': 'yearly',
    '/licence-a-povinne-informace': 'yearly',
  };

  return allRoutes.map((path) => ({
    url: `${siteConfig.url}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: changeFrequency[path] ?? 'monthly',
    priority: priority[path] ?? 0.5,
  }));
}
