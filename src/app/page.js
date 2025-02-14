"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { FaHeart, FaMusic, FaPause } from "react-icons/fa";
import Link from "next/link"; // Import Next.js Link
import DrawHeart from "./components/DrawHeart";
import LoveLetter from "./components/LoveLetter";
import LoveCarousel from "./components/LoveCarousel";
import GiftBox from "./components/GiftBox";
import LoveMeter from "./next-page/LoveMeter";

const Home = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = new Audio("/Tones-and-I-Dance-Monkey.mp3");
    newAudio.loop = true;
    newAudio.volume = 0.5;
    setAudio(newAudio);
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (musicPlaying) {
        audio.pause();
      } else {
        audio.play().catch(console.error);
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  const particleInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="relative h-screen w-screen bg-gradient-to-b from-rose-500 to-pink-700 flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Heart Particle Effect */}

      <Particles
        init={particleInit}
        options={{
          particles: {
            number: { value: 30 },
            shape: { type: "circle" },
            size: { value: 6 },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
            },
            opacity: { value: 0.8 },
            color: { value: "#ff4d6d" },
          },
        }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Centered Greeting Message */}
      <motion.div
        className="z-10 text-center text-7xl md:text-[6rem] font-extrabold text-white px-10 py-6 rounded-3xl shadow-2xl backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        Happy Valentine's Day, <br />
        <span className="text-yellow-300 drop-shadow-lg">Sarah ❤️</span>
      </motion.div>

      {/* Falling Hearts Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: "100vh", rotate: 360 }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}vw`,
              fontSize: `${Math.random() * 40 + 20}px`,
            }}
          >
            <FaHeart />
          </motion.div>
        ))}
      </div>

      {/* Background Music Button */}
      <button
        className="absolute bottom-16 right-10 bg-rose-600 text-white p-6 rounded-full shadow-lg hover:bg-rose-700 transition focus:outline-none"
        onClick={toggleMusic}
      >
        {musicPlaying ? <FaPause size={32} /> : <FaMusic size={32} />}
      </button>
      <LoveLetter />



      {/* Next Page Link */}
{/* Next Page Link */}
<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
  <Link 
    href="/next-page"
    className="text-white text-lg font-semibold bg-rose-600 px-6 py-3 rounded-lg shadow-md hover:bg-rose-700 transition"
  >
    Next Page →
  </Link>
</div>

    </div>
  );
};

export default Home;
