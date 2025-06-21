import { useState, useMemo } from 'react';
import type { Fruit } from '../utils/interfaces';

const useFilteredFruits = (fruits: Fruit[]) => {
  const [filterType, setFilterType] = useState<'family' | 'order' | 'genus'>('family');
  const [filterValue, setFilterValue] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredFruits = useMemo(() => {
    return fruits.filter((fruit) => fruit[filterType]);
  }, [fruits, filterType]);

  const searchedFruits = useMemo(() => {
    if (!filterValue) return filteredFruits;
    return filteredFruits.filter((fruit) =>
      fruit[filterType].toLowerCase().includes(filterValue.toLowerCase())
    );
  }, [filteredFruits, filterType, filterValue]);

  const filteredAndSortedFruits = useMemo(() => {
    return [...searchedFruits].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === 'asc'
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }, [searchedFruits, sortOrder]);

  const visibleFruits = useMemo(
    () => filteredAndSortedFruits.slice(0, visibleCount),
    [filteredAndSortedFruits, visibleCount]
  );

  const totalNutrition = useMemo(() => {
    return visibleFruits.reduce(
      (acc, fruit) => {
        acc.calories = Math.round(acc.calories + fruit.nutritions.calories);
        acc.fat = Math.round(acc.fat + fruit.nutritions.fat);
        acc.sugar = Math.round(acc.sugar + fruit.nutritions.sugar);
        acc.carbohydrates = Math.round(acc.carbohydrates + fruit.nutritions.carbohydrates);
        acc.protein = Math.round(acc.protein + fruit.nutritions.protein);
        return acc;
      },
      {
        calories: 0,
        fat: 0,
        sugar: 0,
        carbohydrates: 0,
        protein: 0,
      }
    );
  }, [visibleFruits]);

  const canSeeMore = visibleCount < filteredAndSortedFruits.length;
  const hasResults = visibleFruits.length > 0;

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return {
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
  };
};

export default useFilteredFruits;
