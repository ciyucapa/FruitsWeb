import type { Fruit } from '../../utils/interfaces';
import useTakeImage from '../../hooks/useTakeImage';
import useLikedFruits from '../../hooks/useLikedFruits';
import './index.css';

type FruitCardProps = {
  fruit: Fruit;
};

const FruitCard: React.FC<FruitCardProps> = ({ fruit }) => {
  const { imgSrc, handleImageError } = useTakeImage(fruit.name);
  const { isLiked, toggleLike } = useLikedFruits();

  const liked = isLiked(fruit.name);
  return (
    <div className="card fruit-card">
      <div className="position-relative widthImage">
        <img
          src={imgSrc}
          onError={handleImageError}
          alt={fruit.name}
          className="card-img-top widthImage"
        />
        <button
          className="btn btn-like"
          onClick={() => toggleLike(fruit.name)}
          aria-label="Like"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={liked ? 'white' : 'none'}
            stroke="white"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
             2 6.42 3.42 5 5.5 5c1.74 0 3.41 1.01 4.13 2.44h.75
             C13.09 6.01 14.76 5 16.5 5c2.08 0 3.5 1.42 3.5 3.5
             0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
      </div>
      <div className="card-body p-4 text-start">
        <h5 className="card-title text-gold-24">{fruit.name}</h5>

        <div className="d-flex justify-content-between">
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
