import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { SITE_NAME } from '@/lib/constants';
import { UtensilsCrossed, LayoutGrid, Snowflake, Pizza } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-card)]/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading text-xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
          >
            <UtensilsCrossed size={24} className="text-[var(--color-accent)]" />
            {SITE_NAME}
          </Link>
          <div className="w-full sm:w-80 lg:w-96">
            <SearchBar />
          </div>
        </div>
        <nav className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-[var(--color-border)]">
          <Link
            href="/categories"
            className="flex items-center gap-1.5 text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <LayoutGrid size={14} />
            All categories
          </Link>
          <Link
            href="/freezer-guide"
            className="flex items-center gap-1.5 text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Snowflake size={14} />
            Can you freeze it?
          </Link>
          <Link
            href="/leftovers"
            className="flex items-center gap-1.5 text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Pizza size={14} />
            Leftovers
          </Link>
        </nav>
      </div>
    </header>
  );
}
