import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllFoods, getFoodById } from '@/lib/data';
import { FoodDetail } from '@/components/FoodDetail';
import { foodMetaTitle, foodMetaDescription, foodStructuredData, breadcrumbStructuredData } from '@/lib/seo';
import { SITE_URL } from '@/lib/constants';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllFoods().map((food) => ({ id: food.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const food = getFoodById(id);
  if (!food) return {};

  return {
    title: foodMetaTitle(food),
    description: foodMetaDescription(food),
    openGraph: {
      title: foodMetaTitle(food),
      description: foodMetaDescription(food),
      url: `${SITE_URL}/food/${food.id}`,
      type: 'article',
    },
    alternates: { canonical: `/food/${food.id}` },
  };
}

export default async function FoodPage({ params }: Props) {
  const { id } = await params;
  const food = getFoodById(id);
  if (!food) notFound();

  const faqStructured = foodStructuredData(food);
  const breadcrumbs = breadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: food.category, url: `/category/${food.category}` },
    { name: food.name, url: `/food/${food.id}` },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {faqStructured && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructured) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <FoodDetail food={food} />
    </div>
  );
}
