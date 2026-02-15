import {
  Beef,
  Bird,
  Fish,
  Egg,
  Carrot,
  UtensilsCrossed,
  Soup,
  Wheat,
  Croissant,
  Coffee,
  type LucideIcon,
} from 'lucide-react';

export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  meat: Beef,
  poultry: Bird,
  seafood: Fish,
  dairy: Egg,
  produce: Carrot,
  leftovers: UtensilsCrossed,
  condiments: Soup,
  pantry: Wheat,
  baked: Croissant,
  beverages: Coffee,
};
