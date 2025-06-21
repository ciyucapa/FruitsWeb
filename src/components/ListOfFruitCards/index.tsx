import FruitCard from '../FruitCard';
import FilterAndSortedFruits from '../FilterAndSortedFruits';
import useFilteredFruits from '../../hooks/useFilterFruits';
import TotalNutritionTable from '../TotalNutritionTable';

import type { FruistProps } from '../../utils/interfaces';

import './index.css';

const ListOfFruitCards: React.FC<FruistProps> = ({ fruits }) => {
  const {
    filterType,
    setFilterType,
    filterValue,
    setFilterValue,
    sortOrder,
    setSortOrder,
    visibleFruits,
    totalNutrition,
    canSeeMore,
    handleSeeMore,
  } = useFilteredFruits(fruits);

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-9">
          <FilterAndSortedFruits
            filterType={filterType}
            filterValue={filterValue}
            sortOrder={sortOrder}
            onFilterTypeChange={setFilterType}
            onFilterValueChange={setFilterValue}
            onToggleSortOrder={() =>
              setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            }
          />
          <div className="row">
            {visibleFruits.map((fruit) => (
              <div
                key={fruit.id}
                className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
              >
                <FruitCard fruit={fruit} />
              </div>
            ))}
          </div>
          {canSeeMore && (
            <div className="text-center mt-3">
              <button className="btn btn-primary btn-see-more" onClick={handleSeeMore}>
                See more
              </button>
            </div>
          )}
        </div>
        <div className="col-lg-3 d-none d-lg-block ps-lg-4">
          <TotalNutritionTable
            total={totalNutrition}
            count={visibleFruits.length}
          />
        </div>
      </div>
    </div>
  );
};

export default ListOfFruitCards;
