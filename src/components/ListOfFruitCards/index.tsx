import { useState } from 'react';
import FruitCard from '../FruitCard';
import type { FruistProps } from '../../utils/interfaces';

const ListOfFruitCards: React.FC<FruistProps> = ({ fruits }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3); // Mostrar 3 frutas más
  };

  const visibleFruits = fruits.slice(0, visibleCount);

  console.log("datosFruit:", fruits)

  return (
    <div className="container">
      <h2 className="my-4">Listado de frutas</h2>
      <div className="row">
        {visibleFruits.map((fruit) => (
          <div key={fruit.id} className="col-md-4 mb-4">
            <FruitCard fruit={fruit} />
          </div>
        ))}
      </div>

      {visibleCount < fruits.length && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleSeeMore}>
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default ListOfFruitCards;
