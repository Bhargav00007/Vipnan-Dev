"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Array of objects with text, name, and title for each slide
const slides = [
  {
    text: "“Working with Vipnan was like adding an extra brain to our team. Their graphic design work blew us away, and I've never met an agency that just 'gets' us the way they do”",
    name: "Udit Kalra",
    title: "Social Media Manager, Evolet India",
  },
  {
    text: "“Their attention to detail and creativity are unmatched. Vipnan has been an essential part of our branding journey, and we couldn't have asked for better collaborators.”",
    name: "Shivani Sharma",
    title: "Creative Director, XYZ Corp",
  },
  {
    text: "“Vipnan helped us reach a new level of success with their unique ideas and flawless execution. They always go above and beyond our expectations.”",
    name: "Raj Mehta",
    title: "Marketing Head, ABC Solutions",
  },
];

const AboutCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
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
                {slides[currentIndex].text}
              </p>
              {/* Name and Title */}
              <p className="text-base md:text-lg lg:text-xl text-custom-white mt-5">
                {slides[currentIndex].name} <br /> {slides[currentIndex].title}
              </p>
            </div>
          </div>
        </div>

        {/* For Mobile */}
        <div className="md:hidden flex flex-col items-center grid grid-cols-1">
          {slides.map((slide, index) => (
            <div key={index} className="w-full p-5">
              <div className="p-5 w-[360px] h-[280px] bg-black bg-opacity-75 border-2 border-custom-border rounded-3xl shadow-lg text-center font-semibold">
                {/* Slide Text */}
                <p className="text-xl">{slide.text}</p>
                <p className="text-base text-custom-white mt-5">
                  {slide.name} <br /> {slide.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
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
