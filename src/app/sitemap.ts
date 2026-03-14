import { MetadataRoute } from 'next';
const BASE = 'https://chhayachhetra.com.np';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/process`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/sectors`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/training`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`,       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/contact`,     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
  ];
}
