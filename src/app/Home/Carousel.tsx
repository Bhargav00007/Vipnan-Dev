// components/Carousel.tsx
import { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden mt-28">
      <div className={`hidden md:flex transition-transform duration-500 ease-in-out ${currentIndex > 2 ? 'hidden md:flex' : ''}`} style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="w-1/3 flex-shrink-0 px-2">
            <Image src={src} alt={`Slide ${index}`} layout="responsive" width={500} height={300} className="bg-blue-500 rounded-lg" />
          </div>
        ))}
      </div>
      <div className={`md:hidden flex flex-col`}>
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 px-2 mb-4">
            <Image src={src} alt={`Slide ${index}`} layout="responsive" width={500} height={300} className="bg-blue-500 rounded-lg" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="hidden md:flex absolute top-1/2 ml-20 transform -translate-y-1/2 bg-black rounded-full p-5 shadow">
      <IoIosArrowBack />
      </button>
      <button onClick={nextSlide} className="hidden md:flex absolute top-1/2 right-20 transform -translate-y-1/2 bg-black rounded-full p-5 shadow">
      <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;