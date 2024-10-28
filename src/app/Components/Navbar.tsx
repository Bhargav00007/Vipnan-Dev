"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowCircleRight, FaTimes, FaBars } from "react-icons/fa";
import { Logo } from "./ui/Logo";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [ibaseenuOpen, setIbaseenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIbaseenuOpen(!ibaseenuOpen);
  };

  useEffect(() => {
    if (ibaseenuOpen) {
      document.body.style.paddingTop = "83.7px";
    } else {
      document.body.style.paddingTop = "0";
    }

    return () => {
      document.body.style.paddingTop = "0";
    };
  }, [ibaseenuOpen]);

  // Helper function to check if the current path matches
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`${ibaseenuOpen ? "fixed w-full top-0 z-50 bg-black" : ""}`}
    >
      <div
        className={`bg-gradient-to-b from-black to-navbar-green w-auto flex flex-wrap items-center justify-between mx-2.5 lg:mx-[119px] md:mx-20 p-4 lg:p-6 lg:mt-[40px] mt-2.5 border border-custom-green overflow-hidden ${
          ibaseenuOpen ? "rounded-[37px]" : "rounded-full"
        }`}
      >
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse border-white-2 rounded-3xl">
          <Link href="/contact" passHref>
            <button
              type="button"
              className="text-custom-white hidden md:flex transition-colors duration-300 bg-transparent hover:bg-transparent font-bold text-base px-7 py-3 text-center dark:bg-custom-green dark:hover:bg-transparent border border-custom-border rounded-3xl"
            >
              Contact Us
              <FaArrowCircleRight className="inline ml-2 mt-1" />
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-gray-100 rounded-lg md:hidden focus:outline-none dark:text-gray-100"
            aria-controls="navbar-cta"
            aria-expanded={ibaseenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {ibaseenuOpen ? (
              <FaTimes className="w-5 h-5" aria-hidden="true" /> // Cross icon
            ) : (
              <FaBars className="w-5 h-5" aria-hidden="true" /> // Hamburger icon
            )}
          </button>
        </div>

        <div
          className={`items-center justify-between ${
            ibaseenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="font-medium text-xl lg:text-base md:text-base sm:text-base flex flex-col lg:ml-10 p-0 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-black">
            <li>
              <Link href="/" passHref>
                <span
                  className={`block py-2 md:p-0 rounded ${
                    isActive("/")
                      ? "text-regular-green"
                      : "dark:text-custom-white"
                  } hover:text-regular-green md:hover:bg-transparent`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <span
                  className={`block py-2 md:p-0 rounded ${
                    isActive("/services")
                      ? "text-regular-green"
                      : "dark:text-custom-white"
                  } hover:text-regular-green md:hover:bg-transparent`}
                >
                  Services
                </span>
              </Link>
            </li>
            <li>
              <Link href="/clients" passHref>
                <span
                  className={`block py-2 md:p-0 rounded ${
                    isActive("/clients")
                      ? "text-regular-green"
                      : "dark:text-custom-white"
                  } hover:text-regular-green md:hover:bg-transparent`}
                >
                  Clients
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <span
                  className={`block py-2 md:p-0 rounded ${
                    isActive("/about")
                      ? "text-regular-green"
                      : "dark:text-custom-white"
                  } hover:text-regular-green md:hover:bg-transparent`}
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <span
                  className={`block lg:hidden md:hidden py-2 md:p-0 rounded ${
                    isActive("/contact")
                      ? "text-regular-green"
                      : "dark:text-custom-white"
                  } hover:text-regular-green md:hover:bg-transparent`}
                >
                  Contact us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
