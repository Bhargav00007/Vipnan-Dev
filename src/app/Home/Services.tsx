import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export const Services = () => {
  return (
    <>
      <div className="flex items-center justify-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl text-center mt-36 leading-tight font-poppins font-bold">
          Services We Can Help You With
        </h1>
      </div>

      <div className="flex flex-wrap justify-items-start md:justify-center lg:justify-center  lg:grid grid-cols-3 mx-10 lg:mx-48 md:mx-50 gap-3  mt-10">
        {/* First */}
        <div className="flex items-center  bg-transparent rounded-lg mt-5">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 33.0413C27.0343 33.0413 33.75 26.3255 33.75 18.0413C33.75 9.75699 27.0343 3.04126 18.75 3.04126C10.4657 3.04126 3.75 9.75699 3.75 18.0413C3.75 26.3255 10.4657 33.0413 18.75 33.0413Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.75 18.0413H33.75"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 3.04126C22.5019 7.14879 24.6341 12.4793 24.75 18.0413C24.6341 23.6032 22.5019 28.9337 18.75 33.0413C14.9981 28.9337 12.8659 23.6032 12.75 18.0413C12.8659 12.4793 14.9981 7.14879 18.75 3.04126Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg mx-5 flex items-center justify-between">
            <span>Web Development</span>
            <FaAngleRight className="grid justify-items-end " />
          </span>
          {/* <hr className="border-custom-green my-1" /> */}
        </div>

        {/* Second */}
        <div className="flex items-center bg-transparent  rounded-lg mt-5">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask
              id="mask0_61_1026"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="37"
              height="37"
            >
              <rect
                x="0.25"
                y="0.0410156"
                width="36"
                height="36"
                fill="url(#pattern0_61_1026)"
              />
            </mask>
            <g mask="url(#mask0_61_1026)">
              <rect
                x="0.625"
                y="0.416016"
                width="35.25"
                height="35.25"
                fill="white"
                stroke="white"
                strokeWidth="0.75"
              />
            </g>
            <defs>
              <pattern
                id="pattern0_61_1026"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image0_61_1026" transform="scale(0.0078125)" />
              </pattern>
              <image
                id="image0_61_1026"
                width="128"
                height="128"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <span className="text-lg mx-5 flex items-center justify-between">
            Personal Branding <FaAngleRight className="inline " />
          </span>
          <hr className="border-custom-green my-1" />
        </div>

        {/* Third */}
        <div className="flex items-center  bg-transparent  rounded-lg mt-5">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask
              id="mask0_90_65"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="37"
              height="37"
            >
              <rect
                x="0.75"
                y="0.0410156"
                width="36"
                height="36"
                fill="url(#pattern0_90_65)"
              />
            </mask>
            <g mask="url(#mask0_90_65)">
              <rect
                x="1.125"
                y="0.416016"
                width="35.25"
                height="35.25"
                fill="white"
                stroke="white"
                strokeWidth="0.75"
              />
            </g>
            <defs>
              <pattern
                id="pattern0_90_65"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image0_90_65" transform="scale(0.0078125)" />
              </pattern>
              <image
                id="image0_90_65"
                width="128"
                height="128"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <span className="text-xl mx-5 flex items-center justify-between">
            Social Advertising <FaAngleRight className="inline" />
          </span>
          <hr className="bg-white my-1" />
        </div>

        {/* Fourth */}
        <div className="flex items-center bg-transparent  rounded-lg mt-5">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask
              id="mask0_61_969"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="37"
              height="37"
            >
              <rect
                x="0.75"
                y="0.0410156"
                width="36"
                height="36"
                fill="url(#pattern0_61_969)"
              />
            </mask>
            <g mask="url(#mask0_61_969)">
              <rect
                x="1.125"
                y="0.416016"
                width="35.25"
                height="35.25"
                fill="white"
                stroke="white"
                strokeWidth="0.75"
              />
            </g>
            <defs>
              <pattern
                id="pattern0_61_969"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image0_61_969" transform="scale(0.0078125)" />
              </pattern>
              <image
                id="image0_61_969"
                width="128"
                height="128"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <span className="text-lg mx-5">
            Web Development <FaAngleRight className="inline" />
          </span>
          <hr className="border-custom-green my-1" />
        </div>

        {/* Fifth */}
        <div className="flex items-center  bg-transparent  rounded-lg mt-5">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask
              id="mask0_61_1037"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="37"
              height="37"
            >
              <rect
                x="0.25"
                y="0.0410156"
                width="36"
                height="36"
                fill="url(#pattern0_61_1037)"
              />
            </mask>
            <g mask="url(#mask0_61_1037)">
              <rect
                x="0.625"
                y="0.416016"
                width="35.25"
                height="35.25"
                fill="white"
                stroke="white"
                strokeWidth="0.75"
              />
            </g>
            <defs>
              <pattern
                id="pattern0_61_1037"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image0_61_1037" transform="scale(0.0078125)" />
              </pattern>
              <image
                id="image0_61_1037"
                width="128"
                height="128"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <span className="text-lg mx-5">
            Personal Branding <FaAngleRight className="inline" />
          </span>
          <hr className="border-custom-green my-1" />
        </div>

        {/* Sixth */}
        <div className="flex items-center bg-transparent rounded-lg mt-5">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask
              id="mask0_90_77"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="37"
              height="37"
            >
              <rect
                x="0.75"
                y="0.0410156"
                width="36"
                height="36"
                fill="url(#pattern0_90_77)"
              />
            </mask>
            <g mask="url(#mask0_90_77)">
              <rect
                x="1.125"
                y="0.581909"
                width="35.25"
                height="35.25"
                fill="white"
                stroke="white"
                strokeWidth="0.75"
              />
            </g>
            <defs>
              <pattern
                id="pattern0_90_77"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image0_90_77" transform="scale(0.0078125)" />
              </pattern>
              <image
                id="image0_90_77"
                width="128"
                height="128"
                href="data:image/png;base64,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"
              />
            </defs>
          </svg>

          <span className="text-xl mx-5">
            Social Advertising <FaAngleRight className="inline" />
          </span>
        </div>
        <hr className="bg-white my-1" />
      </div>
    </>
  );
};
