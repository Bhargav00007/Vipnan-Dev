import React from 'react'

export const Features = () => {
  return (
    <>
    <div className='flex items-center justify-center text-white '>
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl text-center mt-36 leading-tight font-poppins">
            We Make Things Look Good
        </h1>
    </div>

    <div className="flex flex-wrap justify-between rounded-3xl">
  {/* Section 1 */}
  <div className="flex w-full md:w-1/2 p-4">
    <div className="flex w-full bg-blue-700 text-white p-0 rounded-3xl overflow-hidden">
      {/* Text Container (55% width) */}
      <div className="w-[55%] p-6">
        <h2 className="text-xl font-bold mb-3">Text for Div 1</h2>
        <p>This is some descriptive text that occupies 55% of the width in this div.</p>
      </div>
      {/* Image Container (45% width) */}
      <div className="w-[45%]">
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
    <div className="flex w-full bg-blue-700 text-white p-0 rounded-3xl overflow-hidden">
      {/* Text Container (55% width) */}
      <div className="w-[55%] p-6">
        <h2 className="text-xl font-bold mb-3">Text for Div 2</h2>
        <p>This is some descriptive text that occupies 55% of the width in this div.</p>
      </div>
      {/* Image Container (45% width) */}
      <div className="w-[45%]">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Placeholder" 
          className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl" 
        />
      </div>
    </div>
  </div>
</div>


    </>

  )
}
