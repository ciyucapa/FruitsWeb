import { render, screen } from '@testing-library/react';
import ListOfFruitCards from './index';
import type { Fruit } from '../../utils/interfaces';
import * as useFilteredHook from '../../hooks/useFilterFruits';
import '@testing-library/jest-dom';

// 🔁 Mock del componente FruitCard (si deseas evitar dependencias reales)
jest.mock('../FruitCard', () => ({
  __esModule: true,
  default: ({ fruit }: { fruit: Fruit }) => <div data-testid="fruit-card">{fruit.name}</div>,
}));

// 🔁 Mock del componente FilterAndSortedFruits
jest.mock('../FilterAndSortedFruits', () => ({
  __esModule: true,
  default: () => <div data-testid="filter-bar">FilterBar</div>,
}));

// 🔁 Mock del componente TotalNutritionTable
jest.mock('../TotalNutritionTable', () => ({
  __esModule: true,
  default: ({ total, count }: { total: any; count: number }) => (
    <div data-testid="nutrition-table">Nutrition Table - {count}</div>
  ),
}));

describe('ListOfFruitCards', () => {
  const mockFruits: Fruit[] = [
    {
      id: 1,
      name: 'Apple',
      family: 'Rosaceae',
      order: 'Rosales',
      genus: 'Malus',
      nutritions: {
        calories: 52,
        fat: 0.2,
        sugar: 10,
        carbohydrates: 14,
        protein: 0.3,
      },
    },
  ];

  beforeEach(() => {
    // 👇 Mockea el hook useFilteredFruits con comportamiento controlado
    jest.spyOn(useFilteredHook, 'default').mockReturnValue({
      filterType: 'family',
      setFilterType: jest.fn(),
      filterValue: '',
      setFilterValue: jest.fn(),
      sortOrder: 'asc',
      setSortOrder: jest.fn(),
      visibleFruits: mockFruits,
      totalNutrition: {
        calories: 52,
        fat: 0.2,
        sugar: 10,
        carbohydrates: 14,
        protein: 0.3,
      },
      canSeeMore: true,
      hasResults: true,
      handleSeeMore: jest.fn(),
    });
  });

  it('renders filter bar and fruit cards', () => {
    render(<ListOfFruitCards fruits={mockFruits} />);

    // Verifica que se renderice el filtro
    expect(screen.getByTestId('filter-bar')).toBeInTheDocument();

    // Verifica que se renderice el componente FruitCard
    expect(screen.getByTestId('fruit-card')).toHaveTextContent('Apple');

    // Verifica que se renderice el botón See More
    expect(screen.getByRole('button', { name: /see more/i })).toBeInTheDocument();

    // Verifica que se renderice la tabla nutricional
    expect(screen.getByTestId('nutrition-table')).toBeInTheDocument();
  });

  it('shows warning when no results are found', () => {
    jest.spyOn(useFilteredHook, 'default').mockReturnValueOnce({
      filterType: 'family',
      setFilterType: jest.fn(),
      filterValue: 'xyz',
      setFilterValue: jest.fn(),
      sortOrder: 'asc',
      setSortOrder: jest.fn(),
      visibleFruits: [],
      totalNutrition: {
        calories: 0,
        fat: 0,
        sugar: 0,
        carbohydrates: 0,
        protein: 0,
      },
      canSeeMore: false,
      hasResults: false,
      handleSeeMore: jest.fn(),
    });

    render(<ListOfFruitCards fruits={mockFruits} />);

    expect(screen.getByRole('alert')).toHaveTextContent(/no fruits found/i);
  });
});
