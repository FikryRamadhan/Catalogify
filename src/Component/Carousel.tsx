import React, { useState, useEffect } from 'react';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gunakan useEffect untuk membuat interval yang mengganti card setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="relative w-full">
      {/* Card Container dengan gambar sebagai content */}
      <div className="relative bg-white shadow-md rounded-lg w-full h-1/3 flex items-center justify-center overflow-hidden">
        {cards[currentIndex].content}

        {/* Navigasi Titik di dalam card, di posisi bawah */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none transition-colors duration-300 ${
                index === currentIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
