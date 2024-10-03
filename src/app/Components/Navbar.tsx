import React, { useState } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container">
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-2 sm:mx-5 md:mx-5 lg:mx-auto p-4 sm:p-6 lg:p-6 mt-7 border border-custom-green ${
          isMenuOpen ? "rounded-3xl" : "rounded-full"
        } bg-black`}
      >
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="" />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse border-white-2 rounded-3xl">
          <button
            type="button"
            className="text-white hidden md:flex bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-white-300 font-medium text-base px-7 py-3 text-center dark:bg-custom-green dark:hover:bg-black dark:focus:ring-black border border-custom-green rounded-3xl"
          >
            Contact Us
            <FaArrowCircleRight className="inline ml-2 mb-1" />
          </button>

          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden  focus:outline-none  dark:text-gray-100 "
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
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
          className={`items-center justify-between ${isMenuOpen ? "block" : "hidden"}  w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-black">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-custom-green rounded md:bg-transparent md:text-blue-700 md:dark:text-custom-green"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-custom-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-custom-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-custom-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:hidden py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-custom-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
