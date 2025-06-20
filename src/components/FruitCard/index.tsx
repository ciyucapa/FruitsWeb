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
        <div className="row text-center">
          <div className="col text-start">
            <p className='text-gold-16 fw-bold' >Family:</p>
            <p className='text-gold-16 fw-normal' >{fruit.family}</p>
          </div>
          <div className="col text-start">
            <p className='text-gold-16 fw-bold'>Order:</p>
            <p className='text-gold-16 fw-normal' >{fruit.order}</p>
          </div>
          <div className="col text-start">
            <p className='text-gold-16 fw-bold'>Genus:</p>
            <p className='text-gold-16 fw-normal' >{fruit.genus}</p>
          </div>

        </div>
        <div>
          <p className="text-gold-18">Nutritions</p>
          <div>
            <p className="card-text">Calories:</p>
            <p className="card-text">{fruit.nutritions.calories}</p>
          </div>
          <div>
            <p className="card-text">Fat:</p>
            <p className="card-text">{fruit.nutritions.fat}</p>
          </div>
          <div>
            <p className="card-text">Sugar:</p>
            <p className="card-text">{fruit.nutritions.sugar}</p>
          </div>
          <div>
            <p className="card-text">Carbohydrates:</p>
            <p className="card-text">{fruit.nutritions.carbohydrates}</p>
          </div>
          <div>
            <p className="card-text">Protein:</p>
            <p className="card-text">{fruit.nutritions.protein}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitCard;
