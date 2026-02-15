import Link from 'next/link';
import { getAllFoods } from '@/lib/data';
import { Snowflake, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'Can You Freeze It? Freezer Storage Times for 170+ Foods',
  description: 'Which foods can you freeze? Freezer storage times for chicken, milk, cheese, bread, and more. Thawing tips and best practices.',
};

export default function FreezerGuidePage() {
  const foods = getAllFoods();
  const freezable = foods.filter((f) => f.storage.freezer && f.storage.freezer.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-start gap-4 mb-6">
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-[var(--color-sky)]/15 flex items-center justify-center text-[var(--color-sky)]">
          <Snowflake size={28} strokeWidth={2} />
        </div>
        <div>
          <h1 className="font-heading text-3xl font-bold text-[var(--color-foreground)]">
            Can You Freeze It?
          </h1>
          <p className="mt-2 text-[var(--color-secondary)]">
            Yes to most things! Freezing extends shelf life and reduces waste. Here&apos;s how long {freezable.length}+ foods keep in the freezer — plus thawing tips.
          </p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-[var(--color-sky)]/10 border border-[var(--color-sky)]/20 mb-8">
        <div className="flex gap-2">
          <Lightbulb size={20} className="shrink-0 text-[var(--color-sky)] mt-0.5" />
          <p className="text-sm text-[var(--color-foreground)]">
            <strong>Pro tip:</strong> Package in portions before freezing — it&apos;s easier to thaw just what you need. Label with the date so you know when it went in.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {freezable.map((food) => (
          <Link
            key={food.id}
            href={`/food/${food.id}`}
            className="flex items-center gap-3 p-4 rounded-[var(--radius-card)] bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-sky)]/40 transition-colors group"
          >
            <Snowflake size={18} className="shrink-0 text-[var(--color-sky)]/70 group-hover:text-[var(--color-sky)]" />
            <div className="min-w-0 flex-1">
              <span className="font-medium text-[var(--color-foreground)]">{food.name}</span>
              <span className="block text-sm text-[var(--color-secondary)]">
                {food.storage.freezer?.[0]?.duration}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
