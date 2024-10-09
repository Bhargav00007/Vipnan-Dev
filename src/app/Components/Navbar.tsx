"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { Logo } from "./ui/Logo";

const Navbar = () => {
  const [ibaseenuOpen, setIbaseenuOpen] = useState(false);

  const toggleMenu = () => {
    setIbaseenuOpen(!ibaseenuOpen);
  };

  return (
    <nav className=" ">
      <div
        className={` bg-gradient-to-b from-black to-navbar-green w-auto flex flex-wrap  items-center justify-between mx-5 lg:mx-28 md:mx-20 p-4 lg:p-6 mt-7 border border-custom-green overflow-hidden  ${
          ibaseenuOpen ? "rounded-3xl" : "rounded-full"
        } bg-transparent`}
      >
        <Logo />

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse border-white-2 rounded-3xl">
          <button
            type="button"
            className="text-white hidden md:flex transition-colors duration-300 bg-transparent hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-white-300 font-medium text-base px-7 py-3 text-center dark:bg-custom-green dark:hover:bg-transparent dark:focus:ring-black border border-custom-border rounded-3xl"
          >
            Contact Us
            <FaArrowCircleRight className="inline ml-2  mt-1" />
          </button>

          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-gray-100 rounded-lg md:hidden  focus:outline-none  dark:text-gray-100 "
            aria-controls="navbar-cta"
            aria-expanded={ibaseenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            ibaseenuOpen ? "block" : "hidden"
          }  w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="font-medium flex flex-col lg:ml-10 p-4 md:p-0 mt-4 border border-black rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-black">
            <li>
              <Link href="/" passHref>
                <span className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-regular-green md:dark:hover:text-regular-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <span className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-regular-green md:dark:hover:text-regular-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Services
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-regular-green md:p-0 dark:text-white md:dark:hover:text-regular-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Clients
              </a>
            </li>
            <Link href="/about" passHref>
              <span className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-regular-green md:dark:hover:text-regular-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </span>
            </Link>
            <li>
              <a
                href="#"
                className="block md:hidden py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-regular-green md:dark:hover:text-regular-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
