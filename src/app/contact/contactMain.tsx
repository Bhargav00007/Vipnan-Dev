import Link from "next/link";
import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";

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
            We&apos;d love to learn more about you and what we can design and
            build together. <br />
          </p>
        </div>
        <div className=" flex px-10 lg:px-[180px] py-10 sm:justify-start justify-center">
          <Link href="https://calendly.com/rupesh2005b/30min?month=2024-10">
            <button
              type="button"
              className="text-black  hover:text-white  bg-regular-green hover:bg-transparent transition-colors duration-300  focus:outline-none text-base px-4 py-2 text-center dark:bg-regular-green dark:hover:bg-transparent  border border-custom-border rounded-3xl shadow-custom font-bold"
            >
              Book Now
              <FaArrowCircleRight className="inline ml-2 mb-1" />
            </button>
          </Link>
        </div>
        <div className="flex flex-col text-custom-white sm:justify-start justify-center px-10 lg:px-[180px] py-10">
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-4xl leading-tight font-poppins font-semibold text-center sm:text-left">
            Work with us
          </h1>
          <a
            href="mailto:vipnan4you@gmail.com"
            className="underline underline-offset-1 text-2xl md:text-3xl lg:text-5xl xl:text-3xl py-4 text-center xl:font-light sm:text-left hover:text-regular-green"
          >
            vipnan4you@gmail.com
          </a>
        </div>
        <div className="flex flex-col text-custom-white sm:justify-start justify-center px-10 lg:px-[180px] py-0">
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-4xl leading-tight font-poppins font-semibold text-center sm:text-left">
            Ask us{" "}
          </h1>
          <a
            href="mailto:vipnan4you@gmail.com"
            className="underline underline-offset-1 text-2xl md:text-3xl lg:text-5xl xl:text-3xl py-4 text-center xl:font-light sm:text-left hover:text-regular-green"
          >
            vipnan4you@gmail.com
          </a>
        </div>

        <div className="flex flex-col text-custom-white sm:justify-start justify-center px-10 lg:px-[180px] py-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-4xl leading-tight font-poppins font-semibold text-center sm:text-left">
            Follow us on
          </h1>

          <div className="flex justify-center sm:justify-start mt-5 space-x-5">
            {" "}
            <Link href="https://www.behance.net/vipnanin">
              <FaBehance className="h-[24px] w-[24px] hover:text-regular-green" />
            </Link>
            <Link href="https://www.instagram.com/vipnan.in?igsh=a2RrOG4zenU1cnps">
              <FaInstagram className="h-[24px] w-[24px] hover:text-regular-green" />
            </Link>
            <Link href="#">
              <FaLinkedin className="h-[24px] w-[24px] hover:text-regular-green" />
            </Link>
            <Link href="https://x.com/i/flow/login?redirect_after_login=%2FVipnan_studios">
              <FaXTwitter className="h-[24px] w-[24px] hover:text-regular-green" />
            </Link>
          </div>
        </div>

        <div className="h-[15vh] "></div>
      </div>
    </>
  );
};
