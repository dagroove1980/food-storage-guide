import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="font-heading text-3xl font-bold text-[var(--color-foreground)] mb-2">
        Page not found
      </h1>
      <p className="text-[var(--color-secondary)] mb-6">
        We couldn&apos;t find that food. Try searching for it instead.
      </p>
      <Link
        href="/"
        className="inline-flex px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
