import Link from "next/link";
import MemoryGallery from "./MemoryGallery";
import LoveCarousel from "../components/LoveCarousel";

export default function NextPage() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center relative">
      {/* Memory Gallery */}
      <LoveCarousel />
      <MemoryGallery />

      {/* Next Page Button */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <Link 
          href="/next-next-page"
          className="text-white text-lg font-semibold bg-rose-600 px-6 py-3 rounded-lg shadow-md hover:bg-rose-700 transition"
        >
          Next Page →
        </Link>
      </div>
    </div>
  );
}
