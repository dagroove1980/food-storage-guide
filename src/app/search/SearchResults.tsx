'use client';

import { use } from 'react';
import { FoodGrid } from '@/components/FoodGrid';
import { createFoodSearch } from '@/lib/search';
import { getAllFoods } from '@/lib/data';
import { useMemo } from 'react';

interface SearchResultsProps {
  searchParams: Promise<{ q?: string }>;
}

export function SearchResults({ searchParams }: SearchResultsProps) {
  const { q } = use(searchParams);
  const foods = useMemo(() => getAllFoods(), []);
  const fuse = useMemo(() => createFoodSearch(foods), [foods]);

  if (!q?.trim()) {
    return (
      <p className="text-[var(--color-secondary)]">
        Enter a search term to find storage times. Try &quot;chicken&quot;, &quot;milk&quot;, or &quot;can you freeze&quot;.
      </p>
    );
  }

  const results = fuse.search(q).map((r) => r.item);

  if (results.length === 0) {
    return (
      <p className="text-[var(--color-secondary)]">
        No results for &quot;{q}&quot;. Try different keywords like the food name or storage method.
      </p>
    );
  }

  return (
    <>
      <p className="text-[var(--color-secondary)] mb-6">
        {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{q}&quot;
      </p>
      <FoodGrid foods={results} />
    </>
  );
}
