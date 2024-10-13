import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export const Features = () => {
  return (
    <>
      <div className="absolute overflow-hidden w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[85rem] lg:left-[15rem] lg:top-[900px] md:left-[5rem] md:top-[800px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full "></div>
      <div className="absolute overflow-hidden w-[80vw] h-[80vw] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[7vw] top-[80vh] lg:left-[55rem] lg:top-[1100px] md:left-[22rem] md:top-[1050px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full"></div>
      <div className="flex items-center justify-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl text-center mt-40 leading-tight font-poppins font-bold">
          We Make Things Look Good
        </h1>
      </div>

      {/* Updated Grid Layout for Sections 1 and 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-12 xl:mx-[120px] mx-4">
        {/* Section 1 */}
        <div className="flex border-2 border-custom-border text-white p-0 rounded-3xl  overflow-hidden lg:bg-black bg-opacity-75">
          <div className="xl:w-[55%] w-full px-[27px] py-[50px]">
            <h2 className="text-2xl font-bold mb-3">About Vipnan Agency</h2>
            <p className="text-base">
              At Vipnan, creativity and professionalism merge to bring your
              ideas to life. Choose from flexible plans that fit your needs
              monthly, quarterly, or yearly while our expert team takes your
              brand to the next level.
            </p>
            <div className="text-white py-4">
              <button
                type="button"
                className="text-black  hover:text-white  bg-regular-green hover:bg-black transition-colors duration-300  text-base px-7 py-3 text-center dark:bg-regular-green   border border-custom-border rounded-3xl shadow-xl font-bold"
              >
                Learn More
                <FaArrowCircleRight className="inline ml-2 mb-1" />
              </button>
            </div>
          </div>
          <div className="w-[45%] hidden lg:block">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex border-2 border-custom-border text-white p-0 rounded-3xl overflow-hidden lg:bg-black bg-opacity-75 ">
          <div className="xl:w-[55%] w-full px-[27px] py-[50px]">
            <h2 className="text-2xl font-bold mb-3">Is Your Brand Unique?</h2>
            <p className="text-base">
              In today&apos;s fast-paced world, your brand needs to stand out.
              At Vipnan, we deliver innovative solutions that ensure your brand
              remains bold, cohesive, and unforgettable.
            </p>
            <div className="text-white py-4">
              <button
                type="button"
                className="text-black  hover:text-white  bg-regular-green hover:bg-black transition-colors duration-300  text-base px-7 py-3 text-center dark:bg-regular-green dark:hover:bg-black dark:focus:ring-black border border-custom-border rounded-3xl shadow-xl font-bold"
              >
                Learn More
                <FaArrowCircleRight className="inline ml-2 mb-1" />
              </button>
            </div>
          </div>
          <div className="w-[45%] hidden lg:block">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"
            />
          </div>
        </div>
      </div>

      {/* Background Element */}
      <div className="absolute w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[130rem] lg:left-[0rem] lg:top-[1500px] md:left-[-10rem] md:top-[1400px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full py-4">
        <div className="flex sm:flex-grow lg:bg-black border-2 h-auto lg:h-[327px] border-custom-border text-white p-0 rounded-3xl overflow-hidden xl:mx-[120px] mx-4 bg-opacity-75">
          <div className="w-full px-[27px] py-[50px] flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="md:w-[60%]">
                <h2 className="text-2xl font-bold mb-3">
                  Your Vision, Our Commitment
                </h2>
                <p className="text-base">
                  With a team of seasoned professionals, Vipnan transforms your
                  ideas into powerful realities. From personal branding to 3D
                  artistry, we are here to ensure every detail aligns with your
                  success.
                </p>

                {/* Hide this button on mobile */}
                <div className="hidden lg:block text-white py-4">
                  <button
                    type="button"
                    className="text-black  hover:text-white  bg-regular-green hover:bg-black transition-colors duration-300  text-base px-7 py-3 text-center dark:bg-regular-green dark:hover:bg-black dark:focus:ring-black border border-custom-border rounded-3xl shadow-xl font-bold"
                  >
                    Learn More
                    <FaArrowCircleRight className="inline ml-2 mb-1" />
                  </button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="w-full lg:w-[37%] flex flex-col justify-center">
                <div className="flex items-baseline py-5">
                  <p className="text-3xl font-bold">900+</p>
                  <p className="ml-2">Successful Projects</p>
                </div>
                <hr className="border-custom-border my-1" />
                <div className="flex items-baseline py-5">
                  <p className="text-3xl font-bold">600+</p>
                  <p className="ml-2">Years In Business</p>
                </div>
                <hr className="border-custom-border my-1" />
                <div className="flex items-baseline py-5">
                  <p className="text-3xl font-bold">300+</p>
                  <p className="ml-2">Happy Clients</p>
                </div>

                {/* Button for mobile screens only */}
                <div className="block lg:hidden text-white py-4">
                  <button
                    type="button"
                    className="text-black  hover:text-white  bg-regular-green hover:bg-black hover:bg-custom-green transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-white-300 text-base px-7 py-3 text-center dark:bg-regular-green dark:hover:bg-black dark:focus:ring-black border border-custom-border rounded-3xl shadow-xl font-bold"
                  >
                    Learn More
                    <FaArrowCircleRight className="inline ml-2 mb-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image for desktop screens */}
          <div className="w-[45%] hidden lg:block">
            <img
              src="https://via.placeholder.com/75"
              alt="Placeholder"
              className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute w-[300px] h-[300px] lg:hidden  md:hidden left-[7rem] top-[155rem]  bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
    </>
  );
};
