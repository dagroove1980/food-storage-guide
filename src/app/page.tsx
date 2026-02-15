import Link from 'next/link';
import { getAllFoods } from '@/lib/data';
import { FoodGrid } from '@/components/FoodGrid';
import { CATEGORIES } from '@/lib/constants';
import { CATEGORY_ICONS } from '@/lib/icons';
import { Sparkles } from 'lucide-react';

export default function HomePage() {
  const foods = getAllFoods();
  const featured = foods.slice(0, 12);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <section className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-amber)]/10 text-[var(--color-amber)] text-sm font-medium mb-6">
          <Sparkles size={16} />
          Your fridge&apos;s best friend
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-foreground)] mb-4 leading-tight">
          How long does it keep?
        </h1>
        <p className="text-lg text-[var(--color-secondary)] max-w-2xl mx-auto mb-2">
          Stop sniffing. Stop guessing. We&apos;ve got fridge, freezer & pantry times for 174+ foods.
        </p>
        <p className="text-base text-[var(--color-secondary)]/80">
          Signs of spoilage, thawing tips, and the occasional &quot;when in doubt, throw it out.&quot;
        </p>
      </section>

      <section className="mb-14">
        <h2 className="font-heading text-xl font-bold text-[var(--color-foreground)] mb-4">
          Browse by category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] || Sparkles;
            return (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="flex flex-col items-center gap-2 p-4 rounded-[var(--radius-card)] bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-card-hover)] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-background)] flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <span className="font-medium text-sm text-[var(--color-foreground)] text-center">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-heading text-xl font-bold text-[var(--color-foreground)] mb-4">
          Popular lookups
        </h2>
        <FoodGrid foods={featured} />
      </section>

      <div className="text-center">
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
        >
          View all {foods.length} foods
        </Link>
      </div>
    </div>
  );
}
