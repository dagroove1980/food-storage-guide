'use client';

import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createFoodSearch } from '@/lib/search';
import { getAllFoods } from '@/lib/data';
import type { Food } from '@/types/food';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Food[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const foods = useMemo(() => getAllFoods(), []);
  const fuse = useMemo(() => createFoodSearch(foods), [foods]);

  const performSearch = useCallback(
    (q: string) => {
      if (!q.trim()) {
        setResults([]);
        return;
      }
      const searchResults = fuse.search(q).slice(0, 8).map((r) => r.item);
      setResults(searchResults);
      setHighlightIndex(0);
      setIsOpen(searchResults.length > 0);
    },
    [fuse]
  );

  useEffect(() => {
    const timer = setTimeout(() => performSearch(query), 150);
    return () => clearTimeout(timer);
  }, [query, performSearch]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && results[highlightIndex]) {
        e.preventDefault();
        router.push(`/food/${results[highlightIndex].id}`);
        setIsOpen(false);
        setQuery('');
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, highlightIndex, router]);

  useEffect(() => {
    if (listRef.current && results.length > 0) {
      const el = listRef.current.children[highlightIndex] as HTMLElement;
      el?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightIndex, results.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results[highlightIndex]) {
      router.push(`/food/${results[highlightIndex].id}`);
      setIsOpen(false);
      setQuery('');
    } else if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} role="search">
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder="How long does chicken last? Can you freeze milk?"
          aria-label="Search foods"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls="search-results"
          id="search-input"
          className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] placeholder:text-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)]"
        />
      </form>
      {isOpen && results.length > 0 && (
        <div
          ref={listRef}
          id="search-results"
          role="listbox"
          className="absolute top-full left-0 right-0 mt-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg shadow-lg overflow-hidden max-h-80 overflow-y-auto"
        >
          {results.map((food, i) => (
            <Link
              key={food.id}
              href={`/food/${food.id}`}
              role="option"
              aria-selected={i === highlightIndex}
              onMouseEnter={() => setHighlightIndex(i)}
              className={`block px-4 py-3 border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-background)] ${
                i === highlightIndex ? 'bg-[var(--color-background)]' : ''
              }`}
            >
              <span className="font-medium text-[var(--color-foreground)]">
                {food.name}
              </span>
              {food.storage.fridge?.[0] && (
                <span className="ml-2 text-sm text-[var(--color-secondary)]">
                  — Fridge: {food.storage.fridge[0].duration}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
