import type { Fruit } from '../../utils/interfaces';
import { useTakeImage } from '../../hooks/useTakeImage';
import './index.css';

type FruitCardProps = {
  fruit: Fruit;
};

const FruitCard: React.FC<FruitCardProps> = ({ fruit }) => {
  const { imgSrc, handleImageError } = useTakeImage(fruit.name);

  return (
    <div className="card fruit-card">
      <img
        src={imgSrc}
        onError={handleImageError}
        alt={fruit.name}
        className="card-img-top"
      />
      <div className="card-body p-4 text-start">
        <h5 className="card-title text-gold-24">{fruit.name}</h5>

        {/* Family / Order / Genus */}
        <div className="d-flex justify-content-between mb-3">
          <div>
            <p className='text-gold-16 fw-bold'>Family:</p>
            <p className='text-gold-16 fw-normal'>{fruit.family}</p>
          </div>
          <div>
            <p className='text-gold-16 fw-bold'>Order:</p>
            <p className='text-gold-16 fw-normal'>{fruit.order}</p>
          </div>
          <div>
            <p className='text-gold-16 fw-bold'>Genus:</p>
            <p className='text-gold-16 fw-normal'>{fruit.genus}</p>
          </div>
        </div>

        {/* Nutrition Info */}
        <p className="text-gold-18 fw-bold">Nutritions</p>
        <div className="d-flex justify-content-between">
          <p className="text-gold-16 fw-bold">Calories:</p>
          <p className="text-gold-16">{fruit.nutritions.calories}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-gold-16 fw-bold">Fat:</p>
          <p className="text-gold-16">{fruit.nutritions.fat}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-gold-16 fw-bold">Sugar:</p>
          <p className="text-gold-16">{fruit.nutritions.sugar}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-gold-16 fw-bold">Carbohydrates:</p>
          <p className="text-gold-16">{fruit.nutritions.carbohydrates}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-gold-16 fw-bold">Protein:</p>
          <p className="text-gold-16">{fruit.nutritions.protein}</p>
        </div>
      </div>
    </div>
  );
};

export default FruitCard;
