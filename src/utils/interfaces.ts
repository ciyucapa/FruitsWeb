export type Fruit = {
  id: number;
  name: string;
  family: string;
  genus: string;
  order: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
};

export interface FruistProps {
fruits: Fruit[]

}

export type FruitCardProps = {
  imgSrc: string;
  handleImageError: any
};