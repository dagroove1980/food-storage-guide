import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-card)] mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="font-heading font-semibold text-[var(--color-foreground)]"
          >
            {SITE_NAME}
          </Link>
          <nav className="flex gap-6 text-sm text-[var(--color-secondary)]">
            <Link href="/categories" className="hover:text-[var(--color-accent)] transition-colors">
              Categories
            </Link>
            <Link href="/freezer-guide" className="hover:text-[var(--color-accent)] transition-colors">
              Freezer Guide
            </Link>
            <Link href="/leftovers" className="hover:text-[var(--color-accent)] transition-colors">
              Leftovers
            </Link>
          </nav>
        </div>
        <p className="mt-4 text-xs text-[var(--color-secondary)] text-center sm:text-left">
          Storage times are guidelines. When in doubt, throw it out. Refrigerate at 40°F or below.
        </p>
      </div>
    </footer>
  );
}
