"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FaGift } from "react-icons/fa";

const GiftBox = () => {
  const [isOpened, setIsOpened] = useState(false);

  const openGift = () => {
    setIsOpened(true);
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-400 to-red-500 text-center">
      <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">🎁 A Surprise for You!</h1>

      {/* Animated Gift Box */}
      {!isOpened ? (
        <motion.div
          className="relative flex justify-center items-center w-40 h-40 bg-red-600 rounded-lg shadow-lg cursor-pointer"
          onClick={openGift}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGift className="text-white text-6xl" />
        </motion.div>
      ) : (
        /* Unwrapped Gift Box */
        <motion.div
          className="relative bg-white text-black p-8 rounded-lg shadow-2xl text-lg font-semibold max-w-md"
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-2xl font-bold text-red-600">💖 Surprise! 💖</p>
          <p className="mt-4">I just want you to know how much I love and appreciate you. Every moment with you is special! 💕</p>

          {/* Picture or Video Surprise */}
          <div className="mt-6">
            <img src="/images/4-up on 1-18-25 at 2.19 PM (compiled).JPG" alt="Us Together" className="rounded-lg shadow-lg w-full" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GiftBox;
