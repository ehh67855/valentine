"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const DrawHeart = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [points, setPoints] = useState([]); // Stores drawing points

  useEffect(() => {
    if (points.length > 0) {
      const timeout = setTimeout(() => {
        setShowMessage(true);
      }, 5000); // Show message after 5 sec
      return () => clearTimeout(timeout);
    }
  }, [points]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();
  }, [points]);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setShowMessage(false);
    setPoints([]);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setPoints((prev) => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top }]);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-4xl font-bold text-red-600 mb-6">🎨 Doodle</h1>

      <div className="relative">
        {/* Canvas for Drawing */}
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="border-4 border-red-500 bg-white rounded-lg shadow-lg"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />

        {/* Animated Love Message */}
        {showMessage && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.p
              className="text-3xl md:text-5xl font-extrabold text-rose-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              ❤️ I love you Sarah, so much! ❤️
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DrawHeart;
