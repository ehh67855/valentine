import { motion } from "framer-motion";
import { useState } from "react";

export default function LoveMeter() {
  const [love, setLove] = useState(0);
  const [exploded, setExploded] = useState(false);

  const handleClick = () => {
    if (!exploded) {
      setLove((prev) => (prev >= 100 ? 100 : prev + 25));
      if (love >= 75) {
        setTimeout(() => setExploded(true), 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-300 to-pink-500">
      {/* Heart Button */}
      <motion.button
        className="text-red-500 text-6xl"
        whileTap={{ scale: 0.8 }}
        animate={{ rotate: love * 3 }}
        transition={{ type: "spring", stiffness: 100 }}
        onClick={handleClick}
      >
        ❤️
      </motion.button>

      {/* Love Meter Bar */}
      {!exploded ? (
        <motion.div
          className="relative w-72 h-14 bg-gray-200 rounded-full overflow-hidden mt-6 shadow-lg border-4 border-red-400"
          animate={{ scale: [1, 1.1, 1], rotate: [-2, 2, -2, 2, 0] }}
          transition={{
            duration: 0.5,
            repeat: love > 0 ? Infinity : 0,
            repeatType: "reverse",
          }}
        >
          <motion.div
            className="absolute left-0 h-full bg-red-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${love}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
      ) : (
        <motion.div
          className="mt-6 text-4xl font-bold text-red-600 flex items-center space-x-2"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, -10, 10, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <span>✨ INFINITE LOVE 💖✨</span>
        </motion.div>
      )}

      {!exploded && <p className="mt-4 text-white text-lg">Click the heart to measure love!</p>}
    </div>
  );
}
