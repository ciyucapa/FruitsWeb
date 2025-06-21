import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterAndSortedFruits from './index';
import { describe, it, expect, jest } from '@jest/globals';


describe('FilterAndSortedFruits', () => {
  const defaultProps = {
  filterType: 'family' as const, 
  filterValue: '',
  sortOrder: 'asc' as const,    
  onFilterTypeChange: jest.fn(),
  onFilterValueChange: jest.fn(),
  onToggleSortOrder: jest.fn(),
};

  it('renders all UI elements', () => {
    render(<FilterAndSortedFruits {...defaultProps} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument(); // select
    expect(screen.getByPlaceholderText(/search by family/i)).toBeInTheDocument(); // input
    expect(screen.getByRole('button', { name: /order a - z/i })).toBeInTheDocument(); // button
  });

  it('calls onFilterTypeChange when select changes', () => {
    render(<FilterAndSortedFruits {...defaultProps} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'order' } });

    expect(defaultProps.onFilterTypeChange).toHaveBeenCalledWith('order');
  });

  it('calls onFilterValueChange when input changes', () => {
    render(<FilterAndSortedFruits {...defaultProps} />);
    fireEvent.change(screen.getByPlaceholderText(/search by family/i), { target: { value: 'apple' } });

    expect(defaultProps.onFilterValueChange).toHaveBeenCalledWith('apple');
  });

  it('calls onToggleSortOrder when clicking the sort button', () => {
    render(<FilterAndSortedFruits {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: /order a - z/i }));

    expect(defaultProps.onToggleSortOrder).toHaveBeenCalled();
  });
});
