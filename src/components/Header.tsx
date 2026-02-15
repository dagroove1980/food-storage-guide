import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { SITE_NAME } from '@/lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-card)]/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            href="/"
            className="font-heading text-xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
          >
            {SITE_NAME}
          </Link>
          <div className="w-full sm:w-80 lg:w-96">
            <SearchBar />
          </div>
        </div>
        <nav className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-[var(--color-border)]">
          <Link
            href="/categories"
            className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            All categories
          </Link>
          <Link
            href="/freezer-guide"
            className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            Can you freeze it?
          </Link>
          <Link
            href="/leftovers"
            className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            Leftovers
          </Link>
        </nav>
      </div>
    </header>
  );
}
