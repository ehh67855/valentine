"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaRandom } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const loveMessages = [
    "I love you more then infinite ❤️",
    "I love you more than coffee... and that's saying a lot ☕",
    "I love taking showers with you",
    "I love doing skin care with you",
    "I love doing homework with you",
    "With you, every day feels like Valentine's Day 💘",
    "You are so beautiful",
    "Your performance yesterday was amazing",
    "I will always make popcorn for you",
    "your bed is so comfortable",
];

const LoveCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextMessage = () => setIndex((prev) => (prev + 1) % loveMessages.length);
  const prevMessage = () => setIndex((prev) => (prev - 1 + loveMessages.length) % loveMessages.length);
  const shuffleMessage = () => setIndex(Math.floor(Math.random() * loveMessages.length));

  const handlers = useSwipeable({
    onSwipedLeft: nextMessage,
    onSwipedRight: prevMessage,
    trackMouse: true,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6" {...handlers}>
      <div className="relative w-full max-w-2xl">
        {/* Love Message Container */}
        <motion.div
          key={index}
          className="bg-white shadow-lg rounded-2xl p-8 text-center text-2xl md:text-4xl font-bold text-rose-600"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {loveMessages[index]}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="bg-rose-500 text-white p-4 rounded-full shadow-lg hover:bg-rose-600 transition"
            onClick={prevMessage}
          >
            <FaArrowLeft size={24} />
          </button>

          <button
            className="bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition"
            onClick={shuffleMessage}
          >
            <FaRandom size={24} />
          </button>

          <button
            className="bg-rose-500 text-white p-4 rounded-full shadow-lg hover:bg-rose-600 transition"
            onClick={nextMessage}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveCarousel;
