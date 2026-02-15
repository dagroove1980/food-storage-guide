export const SITE_NAME = 'Food Storage Guide';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const SITE_DESCRIPTION =
  'How long does it keep? Fridge, freezer, pantry storage times for 250+ foods. Signs of spoilage, thawing tips, and safe storage methods.';

export const CATEGORIES = [
  { id: 'meat', name: 'Meat', slug: 'meat' },
  { id: 'poultry', name: 'Poultry', slug: 'poultry' },
  { id: 'seafood', name: 'Seafood', slug: 'seafood' },
  { id: 'dairy', name: 'Dairy & Eggs', slug: 'dairy' },
  { id: 'produce', name: 'Produce', slug: 'produce' },
  { id: 'leftovers', name: 'Leftovers', slug: 'leftovers' },
  { id: 'condiments', name: 'Condiments', slug: 'condiments' },
  { id: 'pantry', name: 'Pantry', slug: 'pantry' },
  { id: 'baked', name: 'Baked Goods', slug: 'baked' },
  { id: 'beverages', name: 'Beverages', slug: 'beverages' },
] as const;
