import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";


export const Main = () => {
  return (
    <>
<div className='bg-custom-gradient'>
<div className="flex justify-center items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse border-white-2 rounded-3xl">
  <div className="flex items-center justify-center text-regular-green bg-gradient-to-b from-black to-custom-green focus:ring-4 focus:outline-none focus:ring-white-300 font-bold text-sm px-7 py-2 mt-20 text-center dark:focus:ring-black border border-custom-green rounded-3xl ">
    <h2>Where Strategy meets action.</h2>
  </div>
</div>
<div className='flex items-center justify-center text-white px-4 py-4'>
    <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl text-center leading-tight font-poppins font-bold">
        Your brand, our canvas.<br /> Let&apos;s make something extraordinary.
    </h1>
</div>
<div className='flex items-center justify-center text-white px-4 py-4'>
    <p className="text-base sm:text-base md:text-base lg:text-base xl:text-base text-center leading-tight font-poppins">
    We turn your ideas into visual masterpieces. From personal branding to 3D artistry, we create experiences <br/> that make your brand unforgettable, blending creativity with precision in every detail.
    </p>
</div>
<div className='flex items-center justify-center text-white px-4 py-4'>
  <button type="button" className="text-black hover:text-white bg-black hover:bg-custom-green transition-colors duration-300  focus:outline-none text-base px-7 py-3 text-center dark:bg-regular-green dark:hover:bg-black dark:focus:ring-black border border-custom-green rounded-3xl shadow-custom font-bold">
    Let's Get Creative<FaArrowCircleRight className="inline ml-2 mb-1" />
  </button>
</div>

</div>
    </>
  )
}
