import type { Food } from '@/types/food';
import foodsData from '../../data/foods.json';

const foods: Food[] = foodsData as Food[];

export function getAllFoods(): Food[] {
  return foods;
}

export function getFoodById(id: string): Food | undefined {
  return foods.find((f) => f.id === id);
}

export function getFoodsByCategory(category: string): Food[] {
  return foods.filter((f) => f.category === category);
}

export function getRelatedFoods(food: Food, count = 4): Food[] {
  const ids = food.related || [];
  const related = ids
    .map((id) => getFoodById(id))
    .filter((f): f is Food => f !== undefined)
    .slice(0, count);
  if (related.length < count) {
    const others = foods
      .filter((f) => f.id !== food.id && !ids.includes(f.id))
      .filter((f) => f.category === food.category)
      .slice(0, count - related.length);
    return [...related, ...others];
  }
  return related;
}

