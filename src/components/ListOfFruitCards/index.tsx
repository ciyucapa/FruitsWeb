import { useState } from 'react';
import FruitCard from '../FruitCard';
import type { FruistProps } from '../../utils/interfaces';
import './index.css'; 

const ListOfFruitCards: React.FC<FruistProps> = ({ fruits }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3); 
  };

  const visibleFruits = fruits.slice(0, visibleCount);

  return (
    <div className="container-xxl py-4">
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            {visibleFruits.map((fruit) => (
              <div key={fruit.id} className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                <FruitCard fruit={fruit} />
              </div>
            ))}
          </div>

          {visibleCount < fruits.length && (
            <div className="text-center mt-3">
              <button className="btn btn-primary" onClick={handleSeeMore}>
                See more
              </button>
            </div>
          )}
        </div>

        <div className="col-lg-3 d-none d-lg-block ps-lg-4">
          <div className="card p-3 shadow-sm" style={{ height: '100%' }}>
            <h5 className="mb-3 text-gold-24">General Information</h5>
            <p className="text-gold-16">Select a fruit to view details. You can also compare nutritional values here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfFruitCards;
