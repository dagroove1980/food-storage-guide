import Link from 'next/link';
import { getFoodsByCategory } from '@/lib/data';
import { UtensilsCrossed, Clock, Thermometer } from 'lucide-react';

export const metadata = {
  title: 'Leftover Storage Guide — How Long Do Leftovers Last?',
  description: 'How long do leftover chicken, rice, pasta, pizza last? Fridge and freezer times. Cool within 2 hours to prevent bacteria.',
};

export default function LeftoversPage() {
  const leftovers = getFoodsByCategory('leftovers');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-start gap-4 mb-6">
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-[var(--color-accent)]/15 flex items-center justify-center text-[var(--color-accent)]">
          <UtensilsCrossed size={28} strokeWidth={2} />
        </div>
        <div>
          <h1 className="font-heading text-3xl font-bold text-[var(--color-foreground)]">
            Leftover Storage Guide
          </h1>
          <p className="mt-2 text-[var(--color-secondary)]">
            That takeout box from last night — still good? How about Sunday&apos;s roast? Refrigerate within 2 hours of cooking. Use shallow containers so things cool fast.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="flex gap-3 p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
          <Clock size={24} className="shrink-0 text-[var(--color-accent)]" />
          <div>
            <h3 className="font-semibold text-[var(--color-foreground)]">The 2-hour rule</h3>
            <p className="text-sm text-[var(--color-secondary)] mt-1">
              Get leftovers in the fridge within 2 hours of cooking (1 hour if it&apos;s over 90°F outside).
            </p>
          </div>
        </div>
        <div className="flex gap-3 p-4 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
          <Thermometer size={24} className="shrink-0 text-[var(--color-accent)]" />
          <div>
            <h3 className="font-semibold text-[var(--color-foreground)]">Reheat safely</h3>
            <p className="text-sm text-[var(--color-secondary)] mt-1">
              Heat to 165°F before eating. Stir soups and sauces so they heat through.
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-heading text-xl font-bold text-[var(--color-foreground)] mb-4">
        How long do these leftovers last?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {leftovers.map((food) => (
          <Link
            key={food.id}
            href={`/food/${food.id}`}
            className="block p-5 rounded-[var(--radius-card)] bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors"
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
    </div>
  );
}
