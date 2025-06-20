import type { Fruit } from '../../utils/interfaces';
import { useTakeImage } from '../../hooks/useTakeImage';

type FruitCardProps = {
  fruit: Fruit;
};

const FruitCard: React.FC<FruitCardProps> = ({ fruit }) => {
  const { imgSrc, handleImageError } = useTakeImage(fruit.name);

  return (
    <div className="card h-100">
      <img
        src={imgSrc}
        onError={handleImageError}
        alt={fruit.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{fruit.name}</h5>
        <p className="card-text">Calories: {fruit.nutritions.calories}</p>
        <p className="card-text">Sugar: {fruit.nutritions.sugar}</p>
      </div>
    </div>
  );
};

export default FruitCard;
