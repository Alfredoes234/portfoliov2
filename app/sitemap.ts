import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rayner.com',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://rayner.com/about-me',
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://rayner.com/projects',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://rayner.com/contact',
      changeFrequency: 'yearly',
      priority: 0.3
    }
  ]
}