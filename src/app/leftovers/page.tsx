import Link from 'next/link';
import { getFoodsByCategory } from '@/lib/data';

export const metadata = {
  title: 'Leftover Storage Guide — How Long Do Leftovers Last?',
  description: 'How long do leftovers last? Fridge and freezer storage times for cooked rice, pasta, soup, pizza, and more.',
};

export default function LeftoversPage() {
  const leftovers = getFoodsByCategory('leftovers');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-heading text-3xl font-bold text-[var(--color-foreground)] mb-2">
        Leftover Storage Guide
      </h1>
      <p className="text-[var(--color-secondary)] mb-8">
        How long do leftovers last? Refrigerate within 2 hours of cooking. Use shallow containers for faster cooling.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {leftovers.map((food) => (
          <Link
            key={food.id}
            href={`/food/${food.id}`}
            className="block p-5 rounded-[var(--radius-card)] bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
          >
            <h2 className="font-heading text-lg font-semibold text-[var(--color-foreground)]">
              {food.name}
            </h2>
            {food.storage.fridge?.[0] && (
              <p className="mt-1 text-sm text-[var(--color-secondary)]">
                Fridge: {food.storage.fridge[0].duration}
              </p>
            )}
          </Link>
        ))}
      </div>
      <div className="mt-8 p-6 bg-[var(--color-card)] rounded-[var(--radius-card)] border border-[var(--color-border)]">
        <h2 className="font-heading text-lg font-semibold text-[var(--color-foreground)] mb-2">
          General leftover tips
        </h2>
        <ul className="list-disc list-inside space-y-1 text-[var(--color-secondary)]">
          <li>Refrigerate within 2 hours (1 hour if over 90°F)</li>
          <li>Use shallow containers for faster cooling</li>
          <li>Reheat to 165°F before eating</li>
          <li>When in doubt, throw it out</li>
        </ul>
      </div>
    </div>
  );
}
