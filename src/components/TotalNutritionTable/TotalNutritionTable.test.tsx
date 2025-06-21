import { render, screen } from '@testing-library/react';
import TotalNutritionTable from './index';
import type { Nutrition } from '../../utils/interfaces';
import '@testing-library/jest-dom';

describe('TotalNutritionTable', () => {
  const total: Nutrition = {
    calories: 300,
    fat: 20,
    sugar: 15,
    carbohydrates: 40,
    protein: 10,
  };

  it('renders correctly with nutrition data and product count', () => {
    render(<TotalNutritionTable total={total} count={5} />);

    expect(screen.getByText('General Information')).toBeInTheDocument();
    expect(screen.getByText('No. of Found Products:')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    expect(screen.getByText('Total calories:')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();

    expect(screen.getByText('Total fat:')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();

    expect(screen.getByText('Total sugar:')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();

    expect(screen.getByText('Total carbohydrates:')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();

    expect(screen.getByText('Total protein:')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
