import { FoodCard } from './FoodCard';
import type { Food } from '@/types/food';

interface FoodGridProps {
  foods: Food[];
}

export function FoodGrid({ foods }: FoodGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
