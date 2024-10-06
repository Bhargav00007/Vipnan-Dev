import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

export const Features = () => {
  return (
    <>
<div className="absolute w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] left-[5rem] top-[100rem] lg:left-[50rem] lg:top-[1000px] md:left-[15rem] md:top-[1000px] bg-custom-green blur-2xl z-[-1] opacity-30 rounded-full overflow-hidden"></div>
      <div className='flex items-center justify-center text-white'>
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl text-center mt-36 leading-tight font-poppins font-bold">
          We Make Things Look Good
        </h1>
      </div>

      <div className="flex flex-wrap justify-between rounded-3xl mt-10">
        {/* Section 1 */}
        <div className="flex w-full md:w-1/2 p-4">
          <div className="flex w-full  border-2 border-custom-green text-white p-0 rounded-3xl overflow-hidden ml-auto xl:ml-36 bg-opacity-75  " style={{ width: '586px', height: '325px' }}>
            <div className="xl:w-[55%] w-full p-6">
              <h2 className="text-2xl font-bold mb-3">About Vipnan Agency</h2>
              <p className='text-base'>
                At Vipnan, creativity and professionalism merge to bring your ideas to life. Choose from flexible plans that fit your needs monthly, quarterly, or yearly while our expert team takes your brand to the next level.
              </p>
              <div className='text-white py-4'>
                <button type="button" className="text-black hover:text-white bg-black hover:bg-custom-green transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-white-300 text-base px-7 py-3 text-center dark:bg-regular-green dark:hover:bg-black dark:focus:ring-black border border-custom-green rounded-3xl shadow-xl font-bold">
                  Learn More<FaArrowCircleRight className="inline ml-2 mb-1" />
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

        {/* Section 2 */}
        <div className="flex w-full md:w-1/2 p-4">
          <div className="flex w-full bg-black border-2 border-custom-green text-white p-0 rounded-3xl overflow-hidden bg-opacity-75" style={{ width: '586px', height: '325px' }}>
            <div className="xl:w-[55%] w-full p-6">
              <h2 className="text-2xl font-bold mb-3">Is Your Brand Unique?</h2>
              <p className='text-base'>
                In today fast-paced world, your brand needs to stand out. At Vipnan, we deliver innovative solutions that ensure your brand remains bold, cohesive, and unforgettable.
              </p>
              <div className='text-white py-4'>
                <button type="button" className="text-black hover:text-white bg-black hover:bg-custom-green transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-white-300 text-base px-7 py-3 text-center dark:bg-regular-green dark:hover:bg-black dark:focus:ring-black border border-custom-green rounded-3xl shadow-xl font-bold">
                  Learn More<FaArrowCircleRight className="inline ml-2 mb-1" />
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
      </div>

      <div className="absolute w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[130rem] lg:left-[0rem] lg:top-[1500px] md:left-[0rem] md:top-[1500px] bg-custom-green blur-2xl z-[-1] opacity-30 rounded-full overflow-hidden"></div>


      {/* Section 3 */}
      <div className="flex w-full p-4">
        <div className="flex w-full bg-black border-2 border-custom-green text-white p-0 rounded-3xl overflow-hidden ml-auto xl:ml-36 bg-opacity-75" style={{ width: '1196.25px', height: '325px' }}>
          <div className="w-full p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="md:w-[60%]"> 
                <h2 className="text-2xl font-bold mb-3">Your Vision, Our Commitment</h2>
                <p className='text-base'>
                  With a team of seasoned professionals, Vipnan transforms your ideas into powerful realities. From personal branding to 3D artistry, we are here to ensure every detail aligns with your success.
                </p>
                <div className='text-white py-4'>
                  <button type="button" className="text-black hover:text-white bg-black hover:bg-custom-green transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-white-300 text-base px-7 py-3 text-center dark:bg-regular-green dark:hover:bg-black dark:focus:ring-black border border-custom-green rounded-3xl shadow-xl font-bold">
                    Learn More<FaArrowCircleRight className="inline ml-2 mb-1" />
                  </button>
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center w-[37%]"> 
                <div className="flex items-baseline py-5">
                  <p className='text-3xl font-bold'>900+</p>
                  <p className="ml-2">Successful Projects</p>
                </div>
                <hr className="border-custom-green my-1" />
                <div className="flex items-baseline py-5">
                  <p className='text-3xl font-bold'>600+</p>
                  <p className="ml-2">Years In Business</p>
                </div>
                <hr className="border-custom-green my-1" />
                <div className="flex items-baseline py-5">
                  <p className='text-3xl font-bold'>300+</p>
                  <p className="ml-2">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Update: Hide image for md and below */}
          <div className="w-[45%] hidden lg:block">
            <img 
              src="https://via.placeholder.com/75" 
              alt="Placeholder" 
              className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl" 
            />
          </div>
        </div>
      </div>


      <div className="absolute w-[300px] h-[300px] lg:hidden  md:hidden left-[2rem] top-[160rem]  bg-custom-green blur-2xl z-[-1] opacity-30 rounded-full overflow-hidden"></div>

    </>
  );
};
