import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ContactMain = () => {
  return (
    <>
      <div className="bg-custom-gradient">
        <div className="h-[10vh] "></div>
        <div className="flex text-custom-white sm:justify-start justify-center px-10 lg:px-[180px] py-4">
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl text-center leading-tight font-poppins font-bold">
            Let&apos;s Talk
          </h1>
        </div>
        <div className="flex  text-custom-white sm:justify-start justify-center px-10 lg:px-[180px] py-0">
          <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base text-center leading-tight font-poppins">
            We'd love to learn more about you and what we can design and build
            together.
          </p>
        </div>
        <div className="flex flex-col text-custom-white sm:justify-start justify-center px-10 lg:px-[180px] py-10">
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-4xl leading-tight font-poppins font-semibold text-center sm:text-left">
            Work with us
          </h1>
          <p className="underline underline-offset-1 text-2xl md:text-3xl lg:text-5xl xl:text-3xl py-4 text-center xl:font-light sm:text-left">
            work.kohpact@gmail.com
          </p>
        </div>
        <div className="flex flex-col text-custom-white sm:justify-start justify-center px-10 lg:px-[180px] py-0">
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-4xl leading-tight font-poppins font-semibold text-center sm:text-left">
            Ask us{" "}
          </h1>
          <p className="underline underline-offset-1 text-2xl md:text-3xl lg:text-5xl xl:text-3xl py-4 text-center xl:font-light sm:text-left">
            hello.kohpact@gmail.com{" "}
          </p>
        </div>

        <div className="flex flex-col text-custom-white sm:justify-start justify-center px-10 lg:px-[180px] py-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-4xl leading-tight font-poppins font-semibold text-center sm:text-left">
            Follow us on
          </h1>

          <div className="flex justify-center sm:justify-start mt-5 space-x-5">
            {" "}
            <FaBehance className="h-[24px] w-[24px]" />
            <FaInstagram className="h-[24px] w-[24px]" />
            <FaLinkedin className="h-[24px] w-[24px]" />
            <FaXTwitter className="h-[24px] w-[24px]" />
          </div>
        </div>

        <div className="h-[15vh] "></div>
      </div>
    </>
  );
};
