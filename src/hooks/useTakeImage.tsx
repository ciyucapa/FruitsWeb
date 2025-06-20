import { useState } from 'react';

export const useTakeImage = (imageBase: string) => {
  const extensions = ['.webp', '.jpg', '.png', '.avif'];
  const [extIndex, setExtIndex] = useState(0);

  const currentSrc =
    extIndex === -1
      ? '/assets/not-available.webp'
      : `/assets/${imageBase}${extensions[extIndex]}`;

  const handleImageError = () => {
    if (extIndex < extensions.length - 1) {
      setExtIndex((prev) => prev + 1);
    } else {
      setExtIndex(-1);
    }
  };

  return {
    imgSrc: currentSrc,
    handleImageError,
  };
};
