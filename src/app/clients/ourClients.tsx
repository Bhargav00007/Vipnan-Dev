import React from "react";
import AboutCarousel from "../about/aboutCorousel";

export const OurClients = () => {
  return (
    <>
      <div className="absolute overflow-hidden w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[85rem] lg:left-[15rem] lg:top-[900px] md:left-[5rem] md:top-[800px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full "></div>
      <div className="absolute overflow-hidden md:hidden  w-[40vw] h-[30vw] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[7rem] top-[105rem] lg:left-[55rem] lg:top-[1100px] md:left-[22rem] md:top-[1050px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full "></div>
      <div className="absolute w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[130rem] lg:left-[0rem] lg:top-[1500px] md:left-[-10rem] md:top-[1400px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute w-[300px] h-[300px] lg:hidden  md:hidden left-[3rem] top-[155rem]  bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute md:hidden w-[40vw] h-[30vw]  sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[200rem] lg:left-[55rem] lg:top-[2400px] md:left-[15rem] md:top-[2300px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute w-[300px] h-[300px]  lg:hidden  md:hidden left-[3rem] top-[290rem]  bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute w-[400px] h-[300px] lg:hidden  md:hidden sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] left-[-10rem] top-[250rem] lg:left-[-20rem] lg:top-[2900px] md:left-[-10rem] md:top-[2900px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>

      <div className="flex items-center justify-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl text-center mt-16 leading-tight font-poppins font-bold">
          Our Clients
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 p-5 lg:px-24 md:p-20">
        {/* One */}
        <div className="flex">
          <div className="flex flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-3xl overflow-hidden">
            <div className="w-full p-6">
              <img
                src="/Assets/pic1.png"
                alt=""
                className="my-5 w-[80px] h-[80px] rounded-full"
              />
              <h2 className="text-xl font-bold mb-3">Urbethh</h2>
              <p className="text-base">
                Urbethh merges cultural heritage with modern fashion, offering
                timeless, sustainable clothing for those who value authenticity
                and urban sophistication.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex flex-grow w-full bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-3xl overflow-hidden">
            <div className="w-full p-6">
              <img
                src="/Assets/pic (1).png"
                alt="Time Savings"
                className="my-5 w-[80px] h-[80px] rounded-full"
              />
              <h2 className="text-xl font-bold mb-3">Corsa</h2>
              <p className="text-base">
                Corsa is a trusted bath fittings manufacturer known for
                high-quality products that meet international standards, serving
                global markets.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex flex-grow w-full bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-3xl overflow-hidden">
            <div className="w-full p-6">
              <img
                src="/Assets/pic (2).png"
                alt="Time Savings"
                className="my-5 w-[80px] h-[80px] rounded-full"
              />
              <h2 className="text-xl font-bold mb-3">Taste Of India</h2>
              <p className="text-base">
                Taste of India is dedicated to promoting Indian heritage through
                food aiming to become the largest platform celebrating Indian
                traditions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex flex-grow w-full bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-3xl overflow-hidden">
            <div className="w-full p-6">
              <img
                src="/Assets/pic (3).png"
                alt="Time Savings"
                className="my-5 w-[80px] h-[80px] rounded-full"
              />
              <h2 className="text-xl font-bold mb-3">SneakerPlug Hyderabad</h2>
              <p className="text-base">
                The Sneaker Plug Hyderabad connects sneaker enthusiasts with
                exclusive, hard-to-find kicks, offering sneakers that go beyond
                fashion.
              </p>
            </div>
          </div>
        </div>

        {/* Second Four Sections */}

        {/* First Section */}
        <div className="flex w-full">
          <div className="flex flex-grow w-full bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-3xl overflow-hidden">
            <div className="w-full p-6">
              <img
                src="/Assets/pic (4).png"
                alt="Time Savings"
                className="my-5 w-[80px] h-[80px] rounded-full"
              />
              <h2 className="text-xl font-bold mb-3">Chhichhore</h2>
              <p className="text-base">
                Chhichhore offers premium quality, trendy designs, and
                exceptional customer service. Our products elevate street style
                with confidence.
              </p>
            </div>
          </div>
        </div>
        {/* Second Section */}
        <div className="flex w-full">
          <div className="flex flex-grow w-full bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-3xl overflow-hidden">
            <div className="w-full p-6">
              <img
                src="/Assets/pic (5).png"
                alt="Time Savings"
                className="my-5 w-[80px] h-[80px] rounded-full"
              />
              <h2 className="text-xl font-bold mb-3">Culture Shock</h2>
              <p className="text-base">
                Culture Shock combines bold, contemporary designs with cultural
                influences, offering unique fashion that celebrates
                individuality.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-grow w-full bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-3xl overflow-hidden">
            <div className="w-full p-6">
              <img
                src="/Assets/pic (6).png"
                alt="Time Savings"
                className="my-5 w-[80px] h-[80px] rounded-full"
              />
              <h2 className="text-xl font-bold mb-3">Cypheradorn</h2>
              <p className="text-base">
                Cypheradorn brings bold streetwear that fuses urban style with
                edgy designs, perfect for those who embrace individuality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutCarousel />
    </>
  );
};
