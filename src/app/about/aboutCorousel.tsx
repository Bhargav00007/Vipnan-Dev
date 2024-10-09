"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const textSlides = [
  "“Working with Vipnan was like adding an extra brain to our team. Their graphic design work blew us away, and I've never met an agency that just 'gets' us the way they do”",
  "“Working with Vipnan was like adding an extra brain to our team. Their graphic design work blew us away, and I've never met an agency that just 'gets' us the way they do”",
  "“Working with Vipnan was like adding an extra brain to our team. Their graphic design work blew us away, and I've never met an agency that just 'gets' us the way they do”",
];

const AboutCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + textSlides.length) % textSlides.length
    );
  };

  return (
    <>
      <div className="flex items-center justify-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl text-center mt-16 leading-tight font-poppins font-bold">
          Here&apos;s What Our Clients Say
        </h1>
      </div>

      <div className="relative w-full overflow-hidden mt-12">
        {/* For Desktop */}
        <div className="hidden md:flex justify-center items-center transition-transform duration-500 ease-in-out">
          <div className="w-[864px] h-[436px] flex-shrink-0 px-2 text-center transition-opacity duration-500 ease-in-out">
            <div className="p-16 bg-black bg-opacity-75 border-2 border-custom-border rounded-3xl shadow-lg w-full h-full flex flex-col items-center justify-center">
              {/* Slide Text */}
              <p className="text-lg md:text-2xl lg:text-4xl lg:leading-normal mb-4">
                {textSlides[currentIndex]}
              </p>
              {/* Name and all */}
              <p className="text-base md:text-lg lg:text-xl text-custom-white mt-5 ">
                Udit Kalra <br /> Social Media Manager, Evolet India
              </p>
            </div>
          </div>
        </div>

        {/* For mobile */}
        <div className="md:hidden flex flex-col items-center grid grid-cols-1">
          {textSlides.map((text, index) => (
            <div key={index} className="w-full p-5">
              <div className="p-5 w-[360px] h-[280px] bg-black bg-opacity-75 border-2 border-custom-border rounded-3xl shadow-lg text-center font-semibold">
                {/* Slide Text */}
                <p className=" text-xl ">{text}</p>
                <p className="text-base text-custom-white mt-5">
                  Udit Kalra <br /> Social Media Manager, Evolet India
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*buttons */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute top-1/2 ml-20 transform -translate-y-1/2 bg-transparent border-2 border-blue-300 rounded-full p-5 shadow"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute top-1/2 right-20 transform -translate-y-1/2 bg-transparent border-2 border-blue-300 rounded-full p-5 shadow"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
};

export default AboutCarousel;
