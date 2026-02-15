import { Suspense } from 'react';
import { SearchResults } from './SearchResults';

export const metadata = {
  title: 'Search',
  description: 'Search food storage times.',
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-heading text-2xl font-bold text-[var(--color-foreground)] mb-6">
        Search
      </h1>
      <Suspense fallback={<div className="animate-pulse h-48 bg-[var(--color-card)] rounded-lg" />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
