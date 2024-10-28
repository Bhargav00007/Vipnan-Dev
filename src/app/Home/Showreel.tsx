"use client";
import { useState } from "react";
import Loading from "../Components/ui/Loading";

export default function Showreel() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg mt-20">
          {/* Loading spinner or any loading UI */}
          <Loading />
        </div>
      )}

      <video
        autoPlay
        playsInline
        className={`h-auto rounded-3xl lg:px-36 lg:py-12 md:px-10 md:py-14 px-5 pt-20 ${
          isLoading ? "hidden" : "block"
        }`}
        controls={!isLoading} // Show controls only when video is loaded
        controlsList="nodownload"
        src={"/Assets/showreel-demo.mp4"}
        onLoadedData={handleLoadedData}
      />
    </div>
  );
}
