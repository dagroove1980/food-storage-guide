export const SITE_NAME = 'Food Storage Guide';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const SITE_DESCRIPTION =
  "Stop guessing — how long does chicken last? Can you freeze milk? Fridge, freezer & pantry times for 174 foods. Your fridge's best friend.";

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
