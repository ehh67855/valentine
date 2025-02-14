'use client';

import React, { useState, useEffect } from 'react';

const StarryMemories = () => {
  const [stars, setStars] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [mounted, setMounted] = useState(false);

  const memories = [
    "The day we first met at the coffee shop",
    "Our first trip to the beach together",
    "The time you made me laugh until I cried",
    "Our first dance under the stars",
    "The day we cooked together and made a mess",
    "When you surprised me with my favorite book",
    "Our first movie night at home",
    "The day we got caught in the rain",
    "When you remembered my favorite flower",
    "Our first New Year's Eve together"
  ];

  useEffect(() => {
    setMounted(true);
    // Generate random star positions
    const generateStars = () => {
      return Array.from({ length: memories.length }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 0.5 + Math.random() * 0.5,
        memory: memories[i]
      }));
    };

    setStars(generateStars());
  }, []);

  const handleStarClick = (memory) => {
    if (typeof window !== 'undefined') {
      // Create and play audio only on client side
      try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1HOTgzLikaEAcA/fv7/P38/f7/AAIEBwkKDAwNDQ0NDAsJCAUDAAD9+/r49vT21djb3uDi4+Xn6Onp6uno5+bl4+Lh4ODg4ODg4OHi4+Tl5thEAg==');
        audio.volume = 0.2;
        audio.play().catch(() => {
          console.log('Audio playback blocked');
        });
      } catch (error) {
        console.log('Audio playback error:', error);
      }
    }

    setSelectedMemory(memory);
    
    setTimeout(() => {
      setSelectedMemory(null);
    }, 3000);
  };

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-purple-900 to-blue-900 overflow-hidden">
      {stars.map((star) => (
        <button
          key={star.id}
          onClick={() => handleStarClick(star.memory)}
          className="absolute w-2 h-2 bg-white rounded-full cursor-pointer transform transition-all duration-300 hover:scale-150 animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: `scale(${star.scale})`,
          }}
          aria-label="Click to reveal memory"
        />
      ))}

      {selectedMemory && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white p-6 rounded-lg max-w-md text-center">
          <p className="text-lg font-serif">{selectedMemory}</p>
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-opacity-75 text-sm">
        Click on a star to reveal a memory
      </div>
    </div>
  );
};

export default StarryMemories;