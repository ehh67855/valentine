"use client";
import { Gift } from "lucide-react";
import DrawHeart from "../components/DrawHeart";
import GiftBox from "../components/GiftBox";
import LoveCarousel from "../components/LoveCarousel";
import LoveLetter from "../components/LoveLetter";
import BloomingFlower from "../next-page/BloomingFlower";
import LoveMeter from "../next-page/LoveMeter";


  // Only needed if using hooks inside this page


const NextNextPage = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
        <BloomingFlower />
        <DrawHeart />
        <LoveMeter />
        <GiftBox />
    </div>
  );
};

export default NextNextPage;
