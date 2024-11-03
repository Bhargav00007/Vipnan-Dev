"use client";
import { useState, useEffect, useRef } from "react";
import Loading from "../Components/ui/Loading";

export default function Showreel() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null); // To keep the video reference

  // Timeout to prevent infinite spinner if video load fails
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!videoLoaded) {
        setIsLoading(false); // Hide spinner even if video doesn't load
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [videoLoaded]);

  const handleLoadedData = () => {
    setIsLoading(false);
    setVideoLoaded(true);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg mt-20">
          <Loading />
        </div>
      )}

      {!isLoading && (
        <video
          ref={videoRef} // Reference to video element
          autoPlay
          playsInline
          className="h-auto rounded-3xl lg:px-36 lg:py-8 lg:mt-0 md:px-10 md:py-14 px-5 mt-20"
          controls
          controlsList="nodownload"
          src={"/Assets/Showreel.mp4"}
          onLoadedData={handleLoadedData}
        />
      )}
    </div>
  );
}
