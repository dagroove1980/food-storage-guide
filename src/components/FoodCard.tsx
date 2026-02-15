import Link from 'next/link';
import type { Food } from '@/types/food';
import { CATEGORY_ICONS } from '@/lib/icons';
import { Refrigerator } from 'lucide-react';

interface FoodCardProps {
  food: Food;
}

function getQuickAnswer(food: Food): string {
  if (food.storage.fridge?.[0]) return `Fridge: ${food.storage.fridge[0].duration}`;
  if (food.storage.freezer?.[0]) return `Freezer: ${food.storage.freezer[0].duration}`;
  if (food.storage.pantry?.[0]) return `Pantry: ${food.storage.pantry[0].duration}`;
  return 'See storage guide';
}

export function FoodCard({ food }: FoodCardProps) {
  const Icon = CATEGORY_ICONS[food.category] || Refrigerator;

  return (
    <article className="rounded-[var(--radius-card)] bg-[var(--color-card)] shadow-[var(--shadow-card)] transition-lift overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)]/40">
      <Link href={`/food/${food.id}`} className="block p-5">
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--color-background)] flex items-center justify-center text-[var(--color-accent)]">
            <Icon size={20} strokeWidth={2} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-lg font-semibold text-[var(--color-foreground)]">
              {food.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-secondary)]">
              {getQuickAnswer(food)}
            </p>
            <p className="mt-2 text-xs text-[var(--color-secondary)] capitalize">
              {food.category}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
