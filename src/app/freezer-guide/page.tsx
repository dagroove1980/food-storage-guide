import Link from 'next/link';
import { getAllFoods } from '@/lib/data';

export const metadata = {
  title: 'Can You Freeze It? Freezer Storage Guide',
  description: 'Which foods can you freeze? Freezer storage times for 200+ foods. Thawing tips and best practices.',
};

export default function FreezerGuidePage() {
  const foods = getAllFoods();
  const freezable = foods.filter((f) => f.storage.freezer && f.storage.freezer.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-heading text-3xl font-bold text-[var(--color-foreground)] mb-2">
        Can You Freeze It?
      </h1>
      <p className="text-[var(--color-secondary)] mb-8">
        Most foods can be frozen to extend shelf life. Here are freezer storage times for {freezable.length}+ foods.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {freezable.map((food) => (
          <Link
            key={food.id}
            href={`/food/${food.id}`}
            className="flex justify-between items-center p-3 rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
          >
            <span className="font-medium text-[var(--color-foreground)]">{food.name}</span>
            <span className="text-sm text-[var(--color-secondary)]">
              {food.storage.freezer?.[0]?.duration}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
