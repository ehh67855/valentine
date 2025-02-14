"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const memories = [
  {
    src: "/images/Screenshot 2025-02-14 at 12.19.48 PM.png",
    caption: "Our trip to north georgia",
  },
  {
    src: "/images/IMG_0034.JPG",
    caption: "Sauce house",
  },
  {
    src: "/images/Screenshot 2025-02-14 at 12.18.21 PM.png",
    caption: "Octopus balls",
  },
  {
    src: "/images/Screenshot 2025-02-14 at 12.18.53 PM.png",
    caption: "Shayna'a party",
  },
  {
    src: "/images/Screenshot 2025-02-14 at 12.19.22 PM.png",
    caption: "BANANA",
  }
];

export default function MemoryGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-screen w-full bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-16">
        {memories.map((memory, index) => {
          const y = useTransform(scrollYProgress, [0, 1], [index * 50, -index * 50]);

          return (
            <motion.div key={index} style={{ y }} className="relative w-3/4 md:w-1/2">
              <motion.img
                src={memory.src}
                alt="Memory"
                className="rounded-2xl shadow-lg w-full object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-md">
                {memory.caption}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
