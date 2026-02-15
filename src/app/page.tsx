import Link from 'next/link';
import { getAllFoods } from '@/lib/data';
import { FoodGrid } from '@/components/FoodGrid';
import { CATEGORIES } from '@/lib/constants';

export default function HomePage() {
  const foods = getAllFoods();
  const featured = foods.slice(0, 12);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <section className="text-center mb-12">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--color-foreground)] mb-4 leading-tight">
          How long does it keep?
        </h1>
        <p className="text-lg text-[var(--color-secondary)] max-w-2xl mx-auto">
          Fridge, freezer, and pantry storage times for 200+ foods. Signs of spoilage, thawing tips, and safe storage.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-heading text-xl font-bold text-[var(--color-foreground)] mb-4">
          Browse by category
        </h2>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="px-4 py-2 rounded-[var(--radius-pill)] bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-xl font-bold text-[var(--color-foreground)] mb-4">
          Popular foods
        </h2>
        <FoodGrid foods={featured} />
      </section>

      <div className="text-center">
        <Link
          href="/categories"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-light)] transition-colors"
        >
          View all {foods.length} foods
        </Link>
      </div>
    </div>
  );
}
