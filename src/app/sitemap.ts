import type { MetadataRoute } from 'next';
import { getAllFoods } from '@/lib/data';
import { CATEGORIES } from '@/lib/constants';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const foods = getAllFoods();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/categories`, lastModified: new Date() },
    { url: `${SITE_URL}/freezer-guide`, lastModified: new Date() },
    { url: `${SITE_URL}/leftovers`, lastModified: new Date() },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/category/${cat.slug}`,
    lastModified: new Date(),
  }));

  const foodPages: MetadataRoute.Sitemap = foods.map((food) => ({
    url: `${SITE_URL}/food/${food.id}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...categoryPages, ...foodPages];
}
