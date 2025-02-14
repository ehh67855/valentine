import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BloomingFlower() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const petals = [
    { id: 1, text: "You're beautiful", angle: 0 },
    { id: 2, text: "amazing", angle: 45 },
    { id: 3, text: "sexy", angle: 90 },
    { id: 4, text: "smart", angle: 135 },
    { id: 5, text: "talented", angle: 180 },
    { id: 5, text: "funnny", angle: 180 },
    { id: 5, text: "caring", angle: 180 },
  ];

  return (
    <div ref={containerRef} className="h-[200vh] flex flex-col items-center justify-center bg-pink-100">
      <div className="relative w-60 h-60">
        {/* Center of Flower */}
        <motion.div
          className="absolute w-14 h-14 bg-yellow-500 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Petals */}
        {petals.map((petal, index) => {
          const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
          return (
            <motion.div
              key={petal.id}
              className="absolute w-24 h-24 bg-red-400 rounded-full"
              style={{
                transform: `rotate(${petal.angle}deg) translate(50px)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <p className="absolute text-white text-sm font-bold w-24 text-center -translate-y-6">
                {petal.text}
              </p>
            </motion.div>
          );
        })}

        {/* Final Message */}
        <motion.div
          className="absolute bottom-[-80px] text-lg font-bold text-red-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: petals.length * 0.5, duration: 1 }}
        >
          My love for you is infinite! 💖
        </motion.div>
      </div>
    </div>
  );
}
