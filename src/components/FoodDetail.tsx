import Link from 'next/link';
import type { Food } from '@/types/food';
import { getRelatedFoods } from '@/lib/data';
import { FoodCard } from './FoodCard';

interface FoodDetailProps {
  food: Food;
}

function StorageSection({
  title,
  items,
}: {
  title: string;
  items: { condition: string; duration: string; notes?: string }[];
}) {
  if (!items?.length) return null;
  return (
    <section>
      <h3 className="font-heading text-lg font-semibold text-[var(--color-foreground)] mb-2">
        {title}
      </h3>
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
        <section className="grid sm:grid-cols-2 gap-6 p-6 bg-[var(--color-card)] rounded-[var(--radius-card)] border border-[var(--color-border)]">
          <StorageSection title="Refrigerator" items={food.storage.fridge || []} />
          <StorageSection title="Freezer" items={food.storage.freezer || []} />
          <StorageSection title="Pantry" items={food.storage.pantry || []} />
          <StorageSection title="Counter" items={food.storage.counter || []} />
        </section>

        {food.howToStore.length > 0 && (
          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--color-foreground)] mb-3">
              How to Store
            </h2>
            <ul className="list-disc list-inside space-y-1 text-[var(--color-foreground)]">
              {food.howToStore.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </section>
        )}

        {food.signsOfSpoilage.length > 0 && (
          <section>
            <h2 className="font-heading text-xl font-semibold text-[var(--color-foreground)] mb-3">
              Signs of Spoilage
            </h2>
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
                  <dd className="mt-1 text-[var(--color-secondary)] pl-4 border-l-2 border-[var(--color-border)]">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </div>

      {related.length > 0 && (
        <section className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-foreground)] mb-4">
            Related Foods
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
