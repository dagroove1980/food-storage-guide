import Link from 'next/link';
import { Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-4">🥴</div>
      <h1 className="font-heading text-3xl font-bold text-[var(--color-foreground)] mb-2">
        This food has left the building
      </h1>
      <p className="text-[var(--color-secondary)] mb-8">
        We couldn&apos;t find that page. Maybe it expired? (See what we did there.)
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          <Home size={18} />
          Back to home
        </Link>
        <Link
          href="/categories"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] font-medium hover:border-[var(--color-accent)] transition-colors"
        >
          <Search size={18} />
          Browse all foods
        </Link>
      </div>
    </div>
  );
}
