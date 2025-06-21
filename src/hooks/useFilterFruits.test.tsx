import { renderHook, act } from '@testing-library/react';
import useFilteredFruits from './useFilterFruits';
import type { Fruit } from '../utils/interfaces';

const mockFruits: Fruit[] = [
  {
    id: 1,
    name: 'Apple',
    family: 'Rosaceae',
    genus: 'Malus',
    order: 'Rosales',
    nutritions: {
      calories: 52,
      fat: 0.2,
      sugar: 10.3,
      carbohydrates: 13.8,
      protein: 0.3,
    },
  },
  {
    id: 2,
    name: 'Banana',
    family: 'Musaceae',
    genus: 'Musa',
    order: 'Zingiberales',
    nutritions: {
      calories: 96,
      fat: 0.3,
      sugar: 12,
      carbohydrates: 22,
      protein: 1.1,
    },
  },
];

describe('useFilteredFruits', () => {
  it('returns all fruits by default (filtered by family)', () => {
    const { result } = renderHook(() => useFilteredFruits(mockFruits));
    expect(result.current.visibleFruits.length).toBe(2);
    expect(result.current.canSeeMore).toBe(false);
  });

  it('filters by "order" and searches by value', () => {
    const { result } = renderHook(() => useFilteredFruits(mockFruits));

    act(() => {
      result.current.setFilterType('order');
      result.current.setFilterValue('Rosales');
    });

    expect(result.current.visibleFruits.length).toBe(1);
    expect(result.current.visibleFruits[0].name).toBe('Apple');
  });

  it('sorts fruits by name descending', () => {
    const { result } = renderHook(() => useFilteredFruits(mockFruits));

    act(() => {
      result.current.setSortOrder('desc');
    });

    const sorted = result.current.visibleFruits.map((f) => f.name);
    expect(sorted).toEqual(['Banana', 'Apple']);
  });

  it('calculates totalNutrition correctly', () => {
    const { result } = renderHook(() => useFilteredFruits(mockFruits));
    expect(result.current.totalNutrition.calories).toBe(148); // 52 + 96
  });

  it('increases visible count with "see more"', () => {
    const longList = Array.from({ length: 20 }, (_, i) => ({
      ...mockFruits[0],
      id: i,
      name: `Fruit ${i}`,
    }));

    const { result } = renderHook(() => useFilteredFruits(longList));
    expect(result.current.visibleFruits.length).toBe(8);

    act(() => {
      result.current.handleSeeMore();
    });

    expect(result.current.visibleFruits.length).toBe(12);
  });

  it('has no results when search does not match', () => {
    const { result } = renderHook(() => useFilteredFruits(mockFruits));

    act(() => {
      result.current.setFilterValue('zzz');
    });

    expect(result.current.hasResults).toBe(false);
    expect(result.current.visibleFruits.length).toBe(0);
  });
});
