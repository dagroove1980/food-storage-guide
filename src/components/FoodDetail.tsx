import Link from 'next/link';
import type { Food } from '@/types/food';
import { getRelatedFoods } from '@/lib/data';
import { FoodCard } from './FoodCard';
import { Refrigerator, Snowflake, Package, Timer, Lightbulb, AlertTriangle } from 'lucide-react';

interface FoodDetailProps {
  food: Food;
}

function StorageSection({
  title,
  icon: Icon,
  items,
  color,
}: {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: { condition: string; duration: string; notes?: string }[];
  color: string;
}) {
  if (!items?.length) return null;
  return (
    <section className="p-4 rounded-xl bg-[var(--color-card-warm)] border border-[var(--color-border)]">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}>
          <Icon size={18} />
        </div>
        <h3 className="font-heading text-lg font-semibold text-[var(--color-foreground)]">
          {title}
        </h3>
      </div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-[var(--color-foreground)]">
            <span className="font-medium">{item.condition}:</span>{' '}
            <span className="text-[var(--color-secondary)]">{item.duration}</span>
            {item.notes && (
              <span className="text-sm text-[var(--color-secondary)]">
                {' '}— {item.notes}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FoodDetail({ food }: FoodDetailProps) {
  const related = getRelatedFoods(food);

  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-6">
        <nav className="text-sm text-[var(--color-secondary)] mb-2">
          <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
          {' / '}
          <Link href={`/category/${food.category}`} className="hover:text-[var(--color-accent)] capitalize">
            {food.category}
          </Link>
          {' / '}
          <span className="text-[var(--color-foreground)]">{food.name}</span>
        </nav>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-foreground)]">
          How Long Does {food.name} Last?
        </h1>
        {food.description && (
          <p className="mt-2 text-[var(--color-secondary)]">{food.description}</p>
        )}
      </div>

      <div className="space-y-8">
        <section className="grid sm:grid-cols-2 gap-4">
          <StorageSection
            title="Refrigerator"
            icon={Refrigerator}
            items={food.storage.fridge || []}
            color="bg-[var(--color-mint)]/15 text-[var(--color-mint)]"
          />
          <StorageSection
            title="Freezer"
            icon={Snowflake}
            items={food.storage.freezer || []}
            color="bg-[var(--color-sky)]/15 text-[var(--color-sky)]"
          />
          <StorageSection
            title="Pantry"
            icon={Package}
            items={food.storage.pantry || []}
            color="bg-[var(--color-amber)]/15 text-[var(--color-amber)]"
          />
          <StorageSection
            title="Counter"
            icon={Timer}
            items={food.storage.counter || []}
            color="bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]"
          />
        </section>

        {food.howToStore.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={20} className="text-[var(--color-amber)]" />
              <h2 className="font-heading text-xl font-semibold text-[var(--color-foreground)]">
                How to Store
              </h2>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[var(--color-foreground)]">
              {food.howToStore.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </section>
        )}

        {food.signsOfSpoilage.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={20} className="text-[var(--color-accent)]" />
              <h2 className="font-heading text-xl font-semibold text-[var(--color-foreground)]">
                Signs of Spoilage
              </h2>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[var(--color-foreground)]">
              {food.signsOfSpoilage.map((sign, i) => (
                <li key={i}>{sign}</li>
              ))}
            </ul>
          </section>
        )}

        {food.thawing && food.thawing.length > 0 && (
          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--color-foreground)] mb-3">
              Thawing
            </h2>
            <ul className="list-disc list-inside space-y-1 text-[var(--color-foreground)]">
              {food.thawing.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </section>
        )}

        {food.faqs && food.faqs.length > 0 && (
          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--color-foreground)] mb-3">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-4">
              {food.faqs.map((faq, i) => (
                <div key={i}>
                  <dt className="font-medium text-[var(--color-foreground)]">
                    {faq.question}
                  </dt>
                  <dd className="mt-1 text-[var(--color-secondary)] pl-4 border-l-2 border-[var(--color-accent)]/30">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <div className="p-4 rounded-xl bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/30">
          <p className="text-sm text-[var(--color-foreground)] font-medium">
            Pro tip: When in doubt, throw it out. Your nose knows — if something smells off, trust it.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-foreground)] mb-4">
            You might also need
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((r) => (
              <FoodCard key={r.id} food={r} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
