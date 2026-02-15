'use client';

import Fuse from 'fuse.js';
import type { Food } from '@/types/food';

export function createFoodSearch(foods: Food[]) {
  return new Fuse(foods, {
    keys: [
      { name: 'name', weight: 3 },
      { name: 'aliases', weight: 2 },
      { name: 'category', weight: 1 },
      { name: 'description', weight: 0.5 },
    ],
    threshold: 0.3,
    includeScore: true,
  });
}
