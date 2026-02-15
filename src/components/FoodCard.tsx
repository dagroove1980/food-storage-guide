import Link from 'next/link';
import type { Food } from '@/types/food';

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
  return (
    <article className="rounded-[var(--radius-card)] bg-[var(--color-card)] shadow-[var(--shadow-card)] transition-lift overflow-hidden border border-[var(--color-border)]">
      <Link href={`/food/${food.id}`} className="block p-5">
        <h3 className="font-heading text-lg font-semibold text-[var(--color-foreground)]">
          {food.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-secondary)]">
          {getQuickAnswer(food)}
        </p>
        <p className="mt-2 text-xs text-[var(--color-secondary)] capitalize">
          {food.category}
        </p>
      </Link>
    </article>
  );
}
