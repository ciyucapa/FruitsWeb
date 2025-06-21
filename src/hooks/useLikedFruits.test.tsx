// src/hooks/__tests__/useLikedFruits.test.ts
import { renderHook, act } from '@testing-library/react';
import useLikedFruits from './useLikedFruits';

describe('useLikedFruits', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loads liked fruits from localStorage on init', () => {
    localStorage.setItem('likedFruits', JSON.stringify(['Banana']));
    const { result } = renderHook(() => useLikedFruits());

    expect(result.current.isLiked('Banana')).toBe(true);
    expect(result.current.isLiked('Apple')).toBe(false);
  });

  it('toggles like status and updates localStorage', () => {
    const { result } = renderHook(() => useLikedFruits());

    act(() => {
      result.current.toggleLike('Apple');
    });

    expect(result.current.isLiked('Apple')).toBe(true);
    expect(JSON.parse(localStorage.getItem('likedFruits') || '[]')).toContain('Apple');

    act(() => {
      result.current.toggleLike('Apple');
    });

    expect(result.current.isLiked('Apple')).toBe(false);
    expect(JSON.parse(localStorage.getItem('likedFruits') || '[]')).not.toContain('Apple');
  });

  it('can like multiple fruits', () => {
    const { result } = renderHook(() => useLikedFruits());

    act(() => {
      result.current.toggleLike('Apple');
      result.current.toggleLike('Banana');
    });

    expect(result.current.isLiked('Apple')).toBe(true);
    expect(result.current.isLiked('Banana')).toBe(true);

    const liked = JSON.parse(localStorage.getItem('likedFruits') || '[]');
    expect(liked).toEqual(expect.arrayContaining(['Apple', 'Banana']));
  });
});
