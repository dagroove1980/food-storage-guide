import Link from 'next/link';
import { getFoodsByCategory } from '@/lib/data';
import { CATEGORIES } from '@/lib/constants';

export const metadata = {
  title: 'All Categories',
  description: 'Browse food storage guides by category: meat, dairy, produce, leftovers, and more.',
};

export default function CategoriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-heading text-3xl font-bold text-[var(--color-foreground)] mb-2">
        All Categories
      </h1>
      <p className="text-[var(--color-secondary)] mb-8">
        Browse storage times by food category.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((cat) => {
          const foods = getFoodsByCategory(cat.id);
          return (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="block p-5 rounded-[var(--radius-card)] bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
            >
              <h2 className="font-heading text-lg font-semibold text-[var(--color-foreground)]">
                {cat.name}
              </h2>
              <p className="mt-1 text-sm text-[var(--color-secondary)]">
                {foods.length} foods
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
