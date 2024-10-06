import React, { useState } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container   ">
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-2 sm:mx-5 md:mx-5 lg:mx-auto p-4 sm:p-6 lg:p-6 mt-7 border border-custom-green   ${
          isMenuOpen ? "rounded-3xl" : "rounded-full"
        } bg-black`}
      >
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.15008 0.803223C1.0966 0.839277 1.03666 0.900747 1.01687 0.939791C0.989101 0.994706 0.981309 1.47652 0.982546 3.06651C0.983437 4.19715 0.993039 5.14461 1.00388 5.17201C1.02797 5.23282 16.5829 20.7978 16.6638 20.8421C16.7025 20.8633 17.3782 20.8826 18.7259 20.9011C20.9056 20.9311 20.8394 20.9349 20.9771 20.7713L21.0484 20.6866V10.831V0.975443L20.9884 0.899109C20.8552 0.729851 20.9877 0.737671 18.2538 0.737786C15.7875 0.737872 15.7421 0.738907 15.6487 0.795863C15.5938 0.829358 15.5302 0.905261 15.4984 0.975471C15.4446 1.09381 15.4432 1.22656 15.4425 5.94142L15.4419 10.7858L10.4173 5.76173L5.39268 0.737671H3.32001H1.24737L1.15008 0.803223ZM2.36591 16.9878C2.2647 17.089 2.39336 17.2211 2.50506 17.1306C2.55952 17.0866 2.56406 17.0695 2.53548 17.0161C2.49859 16.9471 2.41973 16.934 2.36591 16.9878ZM1.00327 17.0547C0.989647 17.0683 1.08438 17.3299 1.40125 18.1537C1.50038 18.4114 1.50636 18.4196 1.59402 18.4192L1.6845 18.4187L1.93608 17.7495C2.07446 17.3815 2.18765 17.0703 2.18765 17.058C2.18765 17.0458 2.15211 17.0398 2.10867 17.0448C2.0338 17.0535 2.01848 17.0842 1.8148 17.6355C1.69664 17.9554 1.59184 18.2077 1.58195 18.1962C1.57209 18.1847 1.4957 17.9876 1.4122 17.7583C1.13392 16.9941 1.15474 17.0396 1.08346 17.0396C1.0477 17.0396 1.01161 17.0464 1.00327 17.0547ZM3.1762 17.3804C3.11108 17.4109 3.03667 17.466 3.01088 17.5029L2.96393 17.5699V17.4629C2.96393 17.3678 2.95585 17.3558 2.89205 17.3558H2.82017V18.1465V18.9371H2.89205H2.96393V18.5815V18.2259L3.06476 18.3211C3.22631 18.4734 3.46486 18.4874 3.67641 18.357C3.97304 18.1741 3.96984 17.5997 3.67121 17.4151C3.52719 17.3261 3.32269 17.3117 3.1762 17.3804ZM4.45959 17.3576C4.42037 17.3741 4.36537 17.4083 4.3374 17.4337C4.29019 17.4764 4.28648 17.4753 4.28648 17.4178C4.28648 17.3681 4.26937 17.3558 4.20023 17.3558H4.11397V17.8877V18.4196H4.20023H4.28648V18.0616C4.28648 17.8452 4.30008 17.6737 4.32084 17.6282C4.38722 17.4824 4.63492 17.4218 4.77189 17.5177C4.88545 17.5972 4.91901 17.7273 4.91901 18.0881V18.4196H4.99088H5.06276L5.0627 18.0387C5.06267 17.62 5.03249 17.5121 4.88519 17.4042C4.79612 17.3389 4.56427 17.3135 4.45959 17.3576ZM5.59466 17.3812C5.45786 17.444 5.39656 17.5081 5.33699 17.6506C5.24996 17.859 5.30729 18.1795 5.45507 18.3107C5.53454 18.3813 5.70768 18.4484 5.81029 18.4484C5.92596 18.4484 6.07446 18.3848 6.15122 18.3024L6.21281 18.2363V18.3279C6.21281 18.4106 6.22126 18.4196 6.29906 18.4196H6.38531V17.8877V17.3558H6.29906C6.22238 17.3558 6.21281 17.3654 6.21281 17.4421V17.5283L6.15277 17.4683C6.01112 17.3266 5.7889 17.2919 5.59466 17.3812ZM7.01844 17.3576C6.97922 17.3741 6.92422 17.4083 6.89625 17.4337C6.84904 17.4764 6.84533 17.4753 6.84533 17.4178C6.84533 17.3681 6.82822 17.3558 6.75908 17.3558H6.67282V17.8877V18.4196H6.75908H6.84533V18.0616C6.84533 17.8452 6.85893 17.6737 6.87969 17.6282C6.94607 17.4824 7.19377 17.4218 7.33074 17.5177C7.4443 17.5972 7.47786 17.7273 7.47786 18.0881V18.4196H7.54973H7.62161L7.62155 18.0387C7.62152 17.62 7.59134 17.5121 7.44404 17.4042C7.35497 17.3389 7.12312 17.3135 7.01844 17.3576ZM2.36016 17.8877V18.4196H2.44641H2.53266V17.8877V17.3558H2.44641H2.36016V17.8877ZM3.17956 17.5238C3.0637 17.5946 3.03253 17.637 2.99662 17.7727C2.9271 18.0353 3.07839 18.2743 3.32783 18.2958C3.57325 18.317 3.74027 18.1491 3.74015 17.8814C3.74004 17.5719 3.42722 17.3724 3.17956 17.5238ZM5.68091 17.4983C5.43463 17.6001 5.37485 17.9974 5.57559 18.1982C5.69069 18.3133 5.89551 18.3355 6.03484 18.2481C6.28146 18.0933 6.26585 17.6526 6.0091 17.5212C5.90511 17.4679 5.77602 17.4589 5.68091 17.4983ZM4.48253 19.5116C4.31201 19.5631 4.21699 19.6689 4.1755 19.8534C4.14919 19.9705 4.14994 19.9722 4.22883 19.9722C4.29677 19.9722 4.31155 19.9577 4.32685 19.8761C4.36103 19.6939 4.56954 19.5826 4.74259 19.6543C4.8854 19.7134 4.93079 19.9058 4.84848 20.1028C4.79745 20.2249 4.56413 20.4755 4.32242 20.6679C4.2144 20.7539 4.14272 20.8329 4.14272 20.8659C4.14272 20.9179 4.169 20.921 4.61712 20.921H5.09151V20.8491V20.7772H4.76266H4.43377L4.70242 20.5113C4.93821 20.2779 4.97688 20.2253 5.01848 20.0817C5.0995 19.8018 4.99804 19.5815 4.75737 19.5147C4.63034 19.4794 4.59067 19.479 4.48253 19.5116ZM5.65388 19.5122C5.39558 19.5611 5.27092 19.8469 5.30134 20.3202C5.32612 20.7059 5.4308 20.8779 5.66705 20.921C5.91857 20.967 6.10947 20.8672 6.19515 20.6448C6.25944 20.4781 6.27169 20.0274 6.21715 19.8369C6.17126 19.6766 6.06025 19.5494 5.94608 19.5265C5.89511 19.5162 5.83401 19.504 5.81029 19.4993C5.78657 19.4945 5.71619 19.5003 5.65388 19.5122ZM6.81138 19.5116C6.64085 19.5631 6.54583 19.6689 6.50434 19.8534C6.47804 19.9705 6.47878 19.9722 6.55768 19.9722C6.62561 19.9722 6.64039 19.9577 6.65569 19.8761C6.68987 19.6939 6.89838 19.5826 7.07143 19.6543C7.21424 19.7134 7.25963 19.9058 7.17732 20.1028C7.12629 20.2249 6.89297 20.4755 6.65126 20.6679C6.54324 20.7539 6.47157 20.8329 6.47157 20.8659C6.47157 20.9179 6.49784 20.921 6.94596 20.921H7.42035V20.8491V20.7772H7.0915H6.76261L7.03126 20.5113C7.26705 20.2779 7.30572 20.2253 7.34732 20.0817C7.42835 19.8018 7.32688 19.5815 7.08621 19.5147C6.95918 19.4794 6.91951 19.479 6.81138 19.5116ZM7.89581 19.9937C7.6926 20.2669 7.53705 20.5033 7.53645 20.54C7.53539 20.6037 7.54091 20.6047 7.89475 20.6047H8.25414V20.7628C8.25414 20.9193 8.255 20.921 8.34039 20.921C8.42578 20.921 8.42664 20.9193 8.42664 20.7628V20.6047H8.52727C8.61545 20.6047 8.6279 20.5958 8.6279 20.5328C8.6279 20.4699 8.61545 20.4609 8.52727 20.4609H8.42664V19.9865V19.5122H8.34036C8.26221 19.5122 8.22044 19.5574 7.89581 19.9937ZM1.00885 20.2309V20.921H1.36824C1.70845 20.921 1.72763 20.9179 1.72763 20.8635C1.72763 20.81 1.70845 20.806 1.4545 20.806H1.18136V20.5616V20.3172H1.42574C1.66725 20.3172 1.67013 20.3164 1.67013 20.2453C1.67013 20.1743 1.66725 20.1734 1.42574 20.1734H1.18136V19.929V19.6847H1.4545C1.72668 19.6847 1.72763 19.6844 1.72763 19.6128V19.5409H1.36824H1.00885V20.2309ZM3.04061 19.5888C3.03006 19.5994 3.02143 19.664 3.02143 19.7326C3.02143 19.8463 3.01516 19.8572 2.94955 19.8572C2.89685 19.8572 2.87768 19.8725 2.87768 19.9147C2.87768 19.9562 2.89685 19.9722 2.94679 19.9722H3.01591L3.02586 20.3724C3.03523 20.7496 3.03983 20.7769 3.1055 20.8468C3.16349 20.9085 3.20092 20.921 3.32832 20.921C3.45868 20.921 3.48145 20.913 3.48145 20.8673C3.48145 20.826 3.45379 20.8098 3.3623 20.7975C3.29678 20.7888 3.23229 20.7644 3.21898 20.7435C3.2057 20.7225 3.19463 20.5404 3.19437 20.3388L3.19394 19.9722H3.33769C3.46227 19.9722 3.48145 19.9645 3.48145 19.9147C3.48145 19.8648 3.46227 19.8572 3.33769 19.8572H3.19394V19.7134C3.19394 19.582 3.18819 19.5697 3.12686 19.5697C3.08994 19.5697 3.05113 19.5783 3.04061 19.5888ZM5.58888 19.6991C5.49555 19.7645 5.45478 19.9287 5.45685 20.2309C5.45973 20.6489 5.53477 20.7772 5.77654 20.7772C6.01365 20.7772 6.0978 20.6303 6.0978 20.2166C6.0978 19.8069 6.01304 19.6559 5.78292 19.6559C5.71012 19.6559 5.6228 19.6753 5.58888 19.6991ZM8.0021 20.0834L7.73569 20.4466L7.9986 20.4549C8.14316 20.4594 8.26667 20.458 8.27305 20.4516C8.27944 20.4452 8.28102 20.2781 8.27659 20.0802L8.26851 19.7203L8.0021 20.0834ZM2.14101 19.8697C2.0225 19.9213 1.95764 20.0189 1.95764 20.1457C1.95764 20.2851 2.06727 20.385 2.28828 20.4471C2.50385 20.5077 2.59016 20.5612 2.59016 20.6341C2.59016 20.8372 2.19441 20.8692 2.10519 20.6734C2.06359 20.5821 1.92889 20.5757 1.92889 20.6651C1.92889 20.7702 2.10177 20.9132 2.25694 20.9365C2.53194 20.9777 2.73392 20.8488 2.73392 20.6321C2.73392 20.4908 2.63128 20.4019 2.39029 20.3342C2.09312 20.2509 2.0133 20.1074 2.20731 20.0052C2.35001 19.9301 2.56141 20.0048 2.56141 20.1303C2.56141 20.1594 2.59051 20.1734 2.65077 20.1734C2.73389 20.1734 2.73878 20.1679 2.72041 20.0944C2.66627 19.8774 2.37913 19.7661 2.14101 19.8697ZM8.77278 20.7751C8.7352 20.8453 8.76073 20.9136 8.83318 20.9366C8.9406 20.9707 9.019 20.8348 8.93841 20.7542C8.88666 20.7025 8.80621 20.7126 8.77278 20.7751Z" fill="#57E8BA"/>
</svg>


        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse border-white-2 rounded-3xl">
          <button
            type="button"
            className="text-white hidden md:flex transition-colors duration-300 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-white-300 font-medium text-base px-7 py-3 text-center dark:bg-custom-green dark:hover:bg-black dark:focus:ring-black border border-custom-green rounded-3xl"
          >
            Contact Us
            <FaArrowCircleRight className="inline ml-2  mt-1" />
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
                className="block py-2 px-3 md:p-0 text-white bg-regular-green rounded md:bg-transparent md:text-blue-700 lg:dark:text-regular-green"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-regular-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-regular-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-regular-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block md:hidden py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-regular-green dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
