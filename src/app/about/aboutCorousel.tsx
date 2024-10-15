"use client";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
  {
    text: "“Working with Vipnan was like adding an extra brain to our team. Their graphic design work blew us away, and I've never met an agency that just 'gets' us the way they do”",
    name: "Udit Kalra",
    title: "Social Media Manager, Evolet India",
  },
  {
    text: "“Working with Vipnan has been a fantastic experience for us at Urbethh. Their creative designs and outstanding video editing brought our brand to life. The product shoot was exceptional, and we truly appreciated the warm hospitality throughout the process. Thank you, VIPNAN!”",
    name: "Yash Samdariya & Shubh Nainani",
    title: "Founders, Urbethh",
  },
  {
    text: "“Working with these guys was a great experience for Corsa. Their CGI and 3D projects really brought our ideas to life. The team was professional and easy to work with, making the whole process smooth. We’re really happy with the final results!”",
    name: "Amaan",
    title: "Corsa",
  },
  {
    text: "“Working with this team was a blast! They did an amazing job with our video editing and posters for the festival. Everything turned out really vibrant and captured the spirit of Taste of India perfectly. Super happy with the results!”",
    name: "Hussain",
    title: "Taste Of India",
  },
  {
    text: "“We totally loved the 3D videos of our sneakers! They were fire! The vibes were on point, and the ads really popped. Everyone's been talking about how cool they look. Big thanks for the amazing work!”",
    name: "Ram Nadimpalli",
    title: "Founder, Sneaker Plug Hyderabad",
  },
];

const AboutCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Change slide
      setFade(true); // Start fade-in effect
    }, 500); // 500 ms for fade transition
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setFade(true);
    }, 500);
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
        <div
          className={`hidden md:flex justify-center items-center transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="lg:w-[864px] lg:h-[436px] md:w-[600px] md:h-[300px] flex-shrink-0 px-2 text-center">
            <div className="p-16 bg-black bg-opacity-75 border-2 border-custom-border rounded-3xl shadow-lg w-full h-full flex flex-col items-center justify-center">
              {/* Slide Text */}
              <p className="text-lg md:text-lg lg:text-3xl lg:leading-normal mb-4">
                {slides[currentIndex].text}
              </p>
              {/* Name and Title */}
              <p className="text-base md:text-base lg:text-xl text--white mt-5">
                {slides[currentIndex].name} <br /> {slides[currentIndex].title}
              </p>
            </div>
          </div>
        </div>

        {/* For Mobile */}
        <div className="md:hidden flex flex-col items-center grid grid-cols-1">
          {slides.map((slide, index) => (
            <div key={index} className="w-full p-5">
              <div className="p-5 w-auto h-auto bg-black bg-opacity-50 border-2 border-custom-border rounded-2xl shadow-lg text-center ">
                {/* Slide Text */}
                <p className="text-lg font-semibold">{slide.text}</p>
                <p className="text-base text-custom-white mt-5">
                  {slide.name} <br /> {slide.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute top-1/2 lg:ml-20 md:ml-5  transform -translate-y-1/2 bg-transparent border-2 border-blue-300 rounded-full lg:p-5 md:p-3 shadow"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="hidden md:flex absolute top-1/2 lg:right-20 md:right-5 transform -translate-y-1/2 bg-transparent border-2 border-blue-300 rounded-full lg:p-5 md:p-3 shadow"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
};

export default AboutCarousel;
