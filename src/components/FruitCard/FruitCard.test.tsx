import { render, screen, fireEvent } from '@testing-library/react';
import FruitCard from './index';
import type { Fruit } from '../../utils/interfaces';

jest.mock('../../hooks/useTakeImage', () => () => ({
  imgSrc: 'https://example.com/image.jpg',
  handleImageError: jest.fn(),
}));

const toggleLikeMock = jest.fn();
const isLikedMock = jest.fn();

jest.mock('../../hooks/useLikedFruits', () => () => ({
  toggleLike: toggleLikeMock,
  isLiked: isLikedMock,
}));

const mockFruit: Fruit = {
  id: 1,
  name: 'Apple',
  family: 'Rosaceae',
  genus: 'Malus',
  order: 'Rosales',
  nutritions: {
    calories: 52,
    fat: 0.2,
    sugar: 10.4,
    carbohydrates: 13.8,
    protein: 0.3,
  },
};

describe('FruitCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders fruit information correctly', () => {
    isLikedMock.mockReturnValue(false);

    render(<FruitCard fruit={mockFruit} />);
    
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Rosaceae')).toBeInTheDocument();
    expect(screen.getByText('Rosales')).toBeInTheDocument();
    expect(screen.getByText('Malus')).toBeInTheDocument();
    expect(screen.getByText('52')).toBeInTheDocument(); 
    expect(screen.getByAltText('Apple')).toBeInTheDocument(); 
  });

  test('calls toggleLike when heart button is clicked', () => {
    isLikedMock.mockReturnValue(false);

    render(<FruitCard fruit={mockFruit} />);
    const likeButton = screen.getByRole('button', { name: /like/i });

    fireEvent.click(likeButton);
    expect(toggleLikeMock).toHaveBeenCalledWith('Apple');
  });

  test('renders filled heart if liked', () => {
    isLikedMock.mockReturnValue(true);

    render(<FruitCard fruit={mockFruit} />);
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
  });
});
