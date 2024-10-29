import { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const images = [
  "/Assets/second-feature.png",
  "/Assets/vipnan-logo.png",
  "/Assets/third-feature.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden mt-[120px]">
      <div
        className={`hidden md:flex transition-transform duration-500 ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-[500px] h-[300px] flex-shrink-0 px-2 ">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-[360px] h-[200px] flex-shrink-0 px-2 mb-4 mx-auto"
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="hidden md:flex absolute top-1/2 ml-20 transform -translate-y-1/2 bg-transparent border-2 border-blue-500 rounded-full p-5 shadow"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute top-1/2 right-20 transform -translate-y-1/2 bg-transparent border-2 border-blue-500  rounded-full p-5 shadow"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
