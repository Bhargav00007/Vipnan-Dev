import React from "react";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const serviceMain = () => {
  return (
    <>
      <div className="bg-custom-gradient">
        <div className="flex justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse border-white-2 rounded-3xl ">
          <div className="flex items-center lg:w-[270px] justify-center text-regular-green bg-gradient-to-b from-black to-custom-green  font-bold text-sm px-8 py-2 mt-20 text-center  border border-custom-green rounded-3xl ">
            <h2>Where Strategy meets action.</h2>
          </div>
        </div>
        <div className="flex items-center justify-center text-white px-4 py-4">
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl text-center leading-tight font-poppins font-bold">
            Your Full-Service Creative & <br /> Innovation Partner
          </h1>
        </div>
        <div className="flex items-center justify-center text-white px-4 py-4">
          <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base text-center leading-tight font-poppins">
            At Vipnan, our blend of creativity and technology expertise helps
            transform ideas into <br /> standout brands and unforgettable
            digital experiences.
          </p>
        </div>
        <div className="flex items-center justify-center text-white px-4 py-4">
          <Link href="/clients">
            <button
              type="button"
              className="text-black hover:text-white bg-black hover:bg-custom-green transition-colors duration-300  focus:outline-none text-base px-7 py-3 text-center dark:bg-regular-green dark:hover:bg-black dark:focus:ring-black border border-custom-green rounded-3xl shadow-custom font-bold"
            >
              View Our Past Work
              <FaArrowCircleRight className="inline ml-2 mb-1" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default serviceMain;
