import React from "react";

const AboutMain = () => {
  return (
    <>
      <div className="bg-custom-gradient">
        <div className="flex justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse border-white-2 rounded-3xl ">
          <div className="flex items-center lg:w-[270px] justify-center text-regular-green bg-gradient-to-b from-black to-custom-green  font-bold text-sm px-5 py-2 mt-20 text-center  border border-custom-green rounded-3xl ">
            <h2>Where Strategy meets action.</h2>
          </div>
        </div>
        <div className="flex items-center justify-center text-white px-4 py-4">
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl text-center leading-tight font-poppins font-bold">
            We Shape Brands Through Creative <br /> Digital Innovation
          </h1>
        </div>
        <div className="flex items-center justify-center text-white px-4 py-4">
          <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base text-center leading-tight font-poppins">
            We bring your brand to life through innovative design, technology,
            and strategy,
            <br /> delivering impactful digital experiences.
          </p>
        </div>
        <div className="h-[15vh] "></div>
      </div>
    </>
  );
};

export default AboutMain;
