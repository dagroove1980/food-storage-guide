import type { Food } from '@/types/food';
import { SITE_URL } from './constants';

export function foodMetaTitle(food: Food): string {
  return `How Long Does ${food.name} Last? Fridge, Freezer & Pantry Guide`;
}

export function foodMetaDescription(food: Food): string {
  const parts: string[] = [];
  if (food.storage.fridge?.length) {
    parts.push(`Fridge: ${food.storage.fridge[0]?.duration || ''}`);
  }
  if (food.storage.freezer?.length) {
    parts.push(`Freezer: ${food.storage.freezer[0]?.duration || ''}`);
  }
  if (food.storage.pantry?.length) {
    parts.push(`Pantry: ${food.storage.pantry[0]?.duration || ''}`);
  }
  return `${food.name} storage times. ${parts.join('. ')}. Signs of spoilage, thawing tips & more.`;
}

export function foodStructuredData(food: Food) {
  const faqItems = (food.faqs || []).map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }));

  if (faqItems.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems,
  };
}

export function breadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function collectionStructuredData(
  title: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${SITE_URL}${url}`,
  };
}
