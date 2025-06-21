import { useState, useEffect } from 'react';

const useLikedFruits = () => {
  const [likedFruits, setLikedFruits] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('likedFruits');
    if (stored) {
      setLikedFruits(JSON.parse(stored));
    }
  }, []);

  const toggleLike = (fruitName: string) => {
    setLikedFruits((prev) => {
      const updated = prev.includes(fruitName)
        ? prev.filter(name => name !== fruitName)
        : [...prev, fruitName];

      localStorage.setItem('likedFruits', JSON.stringify(updated));
      return updated;
    });
  };

  const isLiked = (fruitName: string) => likedFruits.includes(fruitName);

  return { isLiked, toggleLike };
};

export default useLikedFruits;