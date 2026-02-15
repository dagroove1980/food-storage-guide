import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllFoods, getFoodsByCategory } from '@/lib/data';
import { FoodGrid } from '@/components/FoodGrid';
import { CATEGORIES } from '@/lib/constants';
import { collectionStructuredData, breadcrumbStructuredData } from '@/lib/seo';
import { SITE_URL } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

const categoryNames: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.name])
);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = categoryNames[slug] || slug;
  const title = `${name} — Storage Times`;
  const description = `How long does ${name.toLowerCase()} last? Fridge, freezer, and pantry storage times.`;

  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryId = CATEGORIES.find((c) => c.slug === slug)?.id ?? slug;
  const foods = getFoodsByCategory(categoryId);
  const name = categoryNames[slug] || categoryId;

  const structured = collectionStructuredData(
    `${name} Storage Guide`,
    `How long does ${name.toLowerCase()} last? Fridge, freezer, pantry times.`,
    `/category/${slug}`
  );
  const breadcrumbs = breadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name, url: `/category/${slug}` },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <nav className="text-sm text-[var(--color-secondary)] mb-4">
        <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
        {' / '}
        <span className="text-[var(--color-foreground)]">{name}</span>
      </nav>
      <h1 className="font-heading text-3xl font-bold text-[var(--color-foreground)] mb-2">
        {name} Storage Guide
      </h1>
      <p className="text-[var(--color-secondary)] mb-8">
        How long does {name.toLowerCase()} last in the fridge, freezer, or pantry? {foods.length} foods.
      </p>
      <FoodGrid foods={foods} />
    </div>
  );
}
