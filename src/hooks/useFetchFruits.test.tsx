import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import useFetchFruits from './useFetchFruits';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useFetchFruits', () => {
  const mockFruits = [
    {
      name: 'Apple',
      family: 'Rosaceae',
      genus: 'Malus',
      order: 'Rosales',
      nutritions: {
        calories: 52,
        fat: 0.2,
        sugar: 10,
        carbohydrates: 14,
        protein: 0.3,
      },
    },
  ];

  it('fetches and sets fruits correctly', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockFruits });

    const { result } = renderHook(() => useFetchFruits());

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.fruits).toEqual(mockFruits);
  });

  it('handles API errors gracefully', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

    const { result } = renderHook(() => useFetchFruits());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.fruits).toEqual([]);
  });
});
