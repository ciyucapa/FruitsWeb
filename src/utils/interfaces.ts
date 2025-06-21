export type Nutrition = {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
};

export type Fruit = {
  id: number;
  name: string;
  family: string;
  genus: string;
  order: string;
  nutritions: Nutrition;
};

export interface FruitsProps {
  fruits: Fruit[];
}

export interface FruitCardProps {
  fruit: Fruit;
}
