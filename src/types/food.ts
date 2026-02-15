export interface StorageDuration {
  condition: string; // e.g. "raw", "cooked", "opened", "unopened"
  duration: string; // e.g. "1-2 days", "3-4 months"
  notes?: string;
}

export interface FoodStorage {
  fridge?: StorageDuration[];
  freezer?: StorageDuration[];
  pantry?: StorageDuration[];
  counter?: StorageDuration[];
}

export interface Food {
  id: string;
  name: string;
  aliases: string[]; // search: "chicken breast", "raw chicken", etc.
  category: string;
  subcategory?: string;
  description?: string;
  storage: FoodStorage;
  howToStore: string[];
  signsOfSpoilage: string[];
  thawing?: string[];
  faqs: { question: string; answer: string }[];
  related?: string[];
}
