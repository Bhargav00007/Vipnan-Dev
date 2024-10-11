import React from "react";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";
import { TbCircleNumber5 } from "react-icons/tb";
import { TbCircleNumber6 } from "react-icons/tb";
import { TbCircleNumber7 } from "react-icons/tb";
import { TbCircleNumber8 } from "react-icons/tb";

export const Overview = () => {
  return (
    <>
      <div className="flex items-center justify-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl text-center mt-40 leading-tight font-poppins font-bold">
          Why Vipnan is Your Game-Changer
        </h1>
      </div>

      <div className="absolute w-[40vw] h-[30vw] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[200rem] lg:left-[55rem] lg:top-[2400px] md:left-[15rem] md:top-[2300px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>

      <div className="flex flex-col md:flex-row  justify-between  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mx-[54px] lg:mx-[120px]">
        {/* One */}
        <div className="flex  ">
          <div className="flex flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[30px] overflow-hidden">
            <div className="w-full p-6">
              <TbCircleNumber1 className="my-5" size={22} />
              <h2 className="text-xl font-bold mb-3">Expertise</h2>
              <p className="text-base">
                We bring together creativity and professionalism to ensure your
                project exceeds expectations. With our team of experts, your
                ideas are in safe hands.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full ">
          <div className="flex w-full flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[30px] overflow-hidden">
            <div className="w-full p-6">
              <TbCircleNumber2 className="my-5" size={22} />
              <h2 className="text-xl font-bold mb-3">Time Savings</h2>
              <p className="text-base">
                We handle the heavy lifting, so you can focus on what matters.
                Our experienced team delivers top-tier results efficiently,
                saving you valuable time.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full ">
          <div className="flex w-full flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[30px] overflow-hidden">
            <div className="w-full p-6">
              <TbCircleNumber3 className="my-5" size={22} />
              <h2 className="text-xl font-bold mb-3">Cost Saving</h2>
              <p className="text-base">
                Get the best value for your investment. We offer flexible, cost
                effective solutions that maximize your budget while delivering
                high impact creative work.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full  ">
          <div className="flex w-full flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[30px] overflow-hidden">
            <div className="w-full p-6">
              <TbCircleNumber4 className="my-5" size={22} />
              <h2 className="text-xl font-bold mb-3">Scalability</h2>
              <p className="text-base">
                As your brand grows, Vipnan is there to support you. Our
                solutions scale with your business, ensuring your brand presence
                evolves without limits.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute w-[400px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] left-[-10rem] top-[250rem] lg:left-[-20rem] lg:top-[2900px] md:left-[-10rem] md:top-[2900px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>

        {/* Second Four Sections */}

        {/* First Section */}
        <div className="flex w-full   ">
          <div className="flex w-full flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[30px] overflow-hidden">
            <div className="w-full p-6">
              <TbCircleNumber5 className="my-5" size={22} />
              <h2 className="text-xl font-bold mb-3">Branding & Identity</h2>
              <p className="lg:text-base ">
                We craft cohesive, striking brand identities that reflect your
                values and resonate across all platforms, ensuring your brand
                stands out in a crowded market.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex w-full   ">
          <div className="flex w-full flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[30px] overflow-hidden">
            <div className="w-full p-6">
              <TbCircleNumber6 className="my-5" size={22} />

              <h2 className="text-xl font-bold mb-3">Customer Service</h2>
              <p className="text-base">
                Your goals are our priority. We are more than just a creative
                partner, we are dedicated to understanding and supporting your
                vision every step of the way.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute w-[300px] h-[300px] lg:hidden  md:hidden left-[7rem] top-[290rem]  bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>

        <div className="flex w-full   ">
          <div className="flex w-full flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[30px] overflow-hidden">
            <div className="w-full p-6">
              <TbCircleNumber7 className="my-5" size={22} />

              <h2 className="text-xl font-bold mb-3">Access To Resources</h2>
              <p className="text-base">
                With Vipnan, you get access to cutting-edge technology and
                creative expertise, ensuring your brand reaches its full
                potential.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full   ">
          <div className="flex w-full flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[30px] overflow-hidden">
            <div className="w-full p-6">
              <TbCircleNumber8 className="my-5" size={22} />
              <h2 className="text-xl font-bold mb-3">Ongoing Support</h2>
              <p className="text-base">
                Our partnership does not end when the project is done. We
                continue to provide ongoing support, ensuring your brand thrives
                in the long term.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[400px] h-[300px] md:w-[500px] md:h-[400px] lg:hidden   left-[-7rem] top-[350rem] md:left-[16rem] md:top-[3500px]  bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
    </>
  );
};
