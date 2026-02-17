export const SITE_NAME = 'FoodStorageGuide';

const getSiteUrl = () => {
  const url =
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL || 'https://food-storage-guide.com';
  return url.replace(/\/$/, '');
};

export const SITE_URL = getSiteUrl();
export const SITE_DESCRIPTION =
  "Stop guessing — how long does chicken last? Can you freeze milk? Fridge, freezer & pantry storage times for 174+ foods. Your fridge's best friend.";

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
