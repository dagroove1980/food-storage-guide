import type { Metadata } from 'next';
import Link from 'next/link';
import { getFoodsByCategory } from '@/lib/data';
import { FoodGrid } from '@/components/FoodGrid';
import { CATEGORIES } from '@/lib/constants';
import { CATEGORY_ICONS } from '@/lib/icons';
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
  const title = `${name} — Fridge, Freezer & Pantry Storage Times`;
  const description = `How long does ${name.toLowerCase()} last? Storage times, spoilage signs, and thawing tips for ${name.toLowerCase()}.`;

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
  const Icon = CATEGORY_ICONS[slug];

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
      <div className="flex items-start gap-4 mb-6">
        {Icon && (
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-[var(--color-accent)]/15 flex items-center justify-center text-[var(--color-accent)]">
            <Icon size={28} strokeWidth={2} />
          </div>
        )}
        <div>
          <h1 className="font-heading text-3xl font-bold text-[var(--color-foreground)]">
            {name} Storage Guide
          </h1>
          <p className="mt-2 text-[var(--color-secondary)]">
            How long does {name.toLowerCase()} last in the fridge, freezer, or pantry? Storage times for {foods.length} foods — plus how to store, signs of spoilage, and when to toss.
          </p>
        </div>
      </div>
      <FoodGrid foods={foods} />
    </div>
  );
}
