import { renderHook, act } from '@testing-library/react';
import useTakeImage from './useTakeImage';

describe('useTakeImage', () => {
  it('returns initial image with .webp extension', () => {
    const { result } = renderHook(() => useTakeImage('Apple'));

    expect(result.current.imgSrc).toBe('/assets/Apple.webp');
  });

  it('changes to next extension on error', () => {
    const { result } = renderHook(() => useTakeImage('Apple'));

    act(() => result.current.handleImageError());
    expect(result.current.imgSrc).toBe('/assets/Apple.jpg');

    act(() => result.current.handleImageError());
    expect(result.current.imgSrc).toBe('/assets/Apple.png');

    act(() => result.current.handleImageError());
    expect(result.current.imgSrc).toBe('/assets/Apple.avif');
  });

  it('returns fallback image when all extensions fail', () => {
    const { result } = renderHook(() => useTakeImage('Apple'));

    act(() => result.current.handleImageError()); // .jpg
    act(() => result.current.handleImageError()); // .png
    act(() => result.current.handleImageError()); // .avif
    act(() => result.current.handleImageError()); // fallback

    expect(result.current.imgSrc).toBe('/assets/not-available.webp');
  });
});
