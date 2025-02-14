"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      {/* Love Letter Button */}
      <motion.div
        className="bg-red-500 text-white px-6 py-3 text-xl font-semibold rounded-lg shadow-lg cursor-pointer hover:bg-red-600 transition"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? "Close the Letter 💔" : "Open the Love Letter 💌"}
      </motion.div>

      {/* Love Letter Envelope Animation */}
      <motion.div
        className="mt-6 relative w-80 h-56"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Envelope */}
        <div className="absolute inset-0 bg-red-400 rounded-lg shadow-2xl" />
        
        {/* Letter Content */}
        <motion.div
          className={`absolute inset-0 bg-white text-black p-6 text-lg font-mono rounded-lg shadow-xl transition-all ${
            isOpen ? "block" : "hidden"
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={isOpen ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-center text-2xl font-bold mb-4">Sarah,</p>
          <div className="text-gray-800 text-lg">
            <Typewriter
              options={{
                strings: [
                  "You mean so much to me...",
                  "I love spending every single day with you...",
                  "I can't wait to spend the rest of my life with you...",
                  "I can't imagine a life without you...",
                  "You are my other half...",
                  "You are the sweetest person I know...",
                  "You are so sexy...",
                  "Happy Valentine's Day, Sarah! ❤️"
                ],
                autoStart: true,
                loop: false,
                delay: 50,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoveLetter;
