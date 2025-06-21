import FruitCard from '../FruitCard';
import FilterAndSortedFruits from '../FilterAndSortedFruits';
import useFilteredFruits from '../../hooks/useFilterFruits';
import TotalNutritionTable from '../TotalNutritionTable';

import type { FruitsProps } from '../../utils/interfaces';
import './index.css';

const ListOfFruitCards: React.FC<FruitsProps> = ({ fruits }) => {
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
    hasResults,
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

          {!hasResults && (
            <div className="alert alert-warning mt-4" role="alert">
              No fruits found under <strong>{filterType}</strong> matching "<em>{filterValue}</em>". Try another keyword.
            </div>
          )}

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

          {canSeeMore && hasResults && (
            <div className="text-center mt-3">
              <button className="btn btn-primary btn-see-more" onClick={handleSeeMore}>
                See more
              </button>
            </div>
          )}
        </div>

        <div className="col-12 col-lg-3 mt-4 mt-lg-0 ps-lg-4">
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
