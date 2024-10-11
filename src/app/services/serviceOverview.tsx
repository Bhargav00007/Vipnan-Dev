import React from "react";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
  TbCircleNumber6,
} from "react-icons/tb";

const serviceOverview = () => {
  return (
    <>
      <div className="absolute overflow-hidden w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[85rem] lg:left-[15rem] lg:top-[900px] md:left-[5rem] md:top-[800px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full "></div>
      <div className="absolute overflow-hidden w-[80vw] h-[80vw] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[7vw] top-[80vh] lg:left-[55rem] lg:top-[1100px] md:left-[22rem] md:top-[1050px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full"></div>
      <div className="absolute w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[130rem] lg:left-[0rem] lg:top-[1500px] md:left-[-10rem] md:top-[1400px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute w-[300px] h-[300px] lg:hidden  md:hidden left-[7rem] top-[155rem]  bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>
      <div className="absolute w-[40vw] h-[30vw] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[400px] left-[0rem] top-[200rem] lg:left-[55rem] lg:top-[2400px] md:left-[15rem] md:top-[2300px] bg-custom-green blur-3xl z-[-1] opacity-50 rounded-full overflow-hidden"></div>

      <div className="flex flex-col md:flex-row justify-between grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-5 lg:p-20 md:p-20 mt-14 lg:mx-16 md:mx-10">
        {/* Section 1 */}
        <div className="flex">
          <div className="flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[50px] overflow-hidden h-auto">
            <div className="w-full px-7 py-9 lg:py-[76px] lg:px-[45px]">
              <TbCircleNumber1 className="my-5 lg:mb-10 w-[22px] h-[22px] lg:w-[44px] lg:h-[44px]" />
              <h2 className="text-2xl lg:text-5xl font-bold mb-5">
                Web Development
              </h2>
              <p className="text-lg lg:text-3xl lg:leading-relaxed">
                We create responsive, visually appealing websites that not only
                represent your brand but drive engagement and growth.
              </p>
              <div className="px-5 lg:px-10 mt-4 rounded-lg shadow-lg">
                <ul className="list-disc text-left">
                  <li className="text-lg lg:text-3xl mb-3">
                    Research & Content Strategy
                  </li>
                  <li className="text-lg lg:text-3xl mb-3">UI/UX Design</li>
                  <li className="text-lg lg:text-3xl mb-3">
                    Mockups/Prototypes
                  </li>
                  <li className="text-lg lg:text-3xl">Development & Hosting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex">
          <div className="flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[50px] overflow-hidden h-auto">
            <div className="w-full px-7 py-9 lg:py-[76px] lg:px-[45px]">
              <TbCircleNumber2 className="my-5 lg:mb-10 w-[22px] h-[22px] lg:w-[44px] lg:h-[44px]" />
              <h2 className="text-2xl lg:text-5xl font-bold mb-5">
                Personal Branding
              </h2>
              <p className="text-lg lg:text-3xl lg:leading-relaxed">
                Your personal brand, crafted to perfection. We help you
                establish a unique identity that reflects your values with your
                audience.
              </p>
              <div className="px-5 lg:px-10 mt-4 rounded-lg shadow-lg">
                <ul className="list-disc text-left">
                  <li className="text-lg lg:text-3xl mb-3">
                    Personal brand strategy
                  </li>
                  <li className="text-lg lg:text-3xl mb-3">Visual identity</li>
                  <li className="text-lg lg:text-3xl mb-3">
                    Social media presence
                  </li>
                  <li className="text-lg lg:text-3xl">Content strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex">
          <div className="flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[50px] overflow-hidden h-auto">
            <div className="w-full px-7 py-9 lg:py-[76px] lg:px-[45px]">
              <TbCircleNumber3 className="my-5 lg:mb-10 w-[22px] h-[22px] lg:w-[44px] lg:h-[44px]" />
              <h2 className="text-2xl lg:text-5xl font-bold mb-5">
                Social Advertising
              </h2>
              <p className="text-lg lg:text-3xl lg:leading-relaxed">
                Maximize your reach with targeted social media ads that capture
                attention and convert.
              </p>
              <div className="px-5 lg:px-10 mt-4 rounded-lg shadow-lg">
                <ul className="list-disc text-left">
                  <li className="text-lg lg:text-3xl mb-3">
                    Campaign strategy
                  </li>
                  <li className="text-lg lg:text-3xl mb-3">
                    Audience targeting
                  </li>
                  <li className="text-lg lg:text-3xl mb-3">Ad design</li>
                  <li className="text-lg lg:text-3xl">Performance tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex">
          <div className="flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[50px] overflow-hidden h-auto">
            <div className="w-full px-7 py-9 lg:py-[76px] lg:px-[45px]">
              <TbCircleNumber4 className="my-5 lg:mb-10 w-[22px] h-[22px] lg:w-[44px] lg:h-[44px]" />
              <h2 className="text-2xl lg:text-5xl font-bold mb-5">
                Video/Graphics Editing
              </h2>
              <p className="text-lg lg:text-3xl lg:leading-relaxed">
                Transform your raw footage or graphics into polished, engaging
                brand stories.
              </p>
              <div className="px-5 lg:px-10 mt-4 rounded-lg shadow-lg">
                <ul className="list-disc text-left">
                  <li className="text-lg lg:text-3xl mb-3">Video editing</li>
                  <li className="text-lg lg:text-3xl mb-3">Motion graphics</li>
                  <li className="text-lg lg:text-3xl mb-3">
                    Graphic enhancements
                  </li>
                  <li className="text-lg lg:text-3xl">Color correction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="flex">
          <div className="flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[50px] overflow-hidden h-auto">
            <div className="w-full px-7 py-9 lg:py-[76px] lg:px-[45px]">
              <TbCircleNumber5 className="my-5 lg:mb-10 w-[22px] h-[22px] lg:w-[44px] lg:h-[44px]" />
              <h2 className="text-2xl lg:text-5xl font-bold mb-5">
                Social Media Marketing
              </h2>
              <p className="text-lg lg:text-3xl lg:leading-relaxed">
                We create and execute strategies that grow your brand&apos;s
                online presence and engage with your audience.
              </p>
              <div className="px-5 lg:px-10 mt-4 rounded-lg shadow-lg">
                <ul className="list-disc text-left">
                  <li className="text-lg lg:text-3xl mb-3">Content creation</li>
                  <li className="text-lg lg:text-3xl mb-3">
                    Community engagement
                  </li>
                  <li className="text-lg lg:text-3xl mb-3">
                    Campaign management
                  </li>
                  <li className="text-lg lg:text-3xl">Analytics reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="flex">
          <div className="flex-grow bg-black bg-opacity-75 border-2 border-custom-border text-white m-5 rounded-[50px] overflow-hidden h-auto">
            <div className="w-full px-7 py-9 lg:py-[76px] lg:px-[45px]">
              <TbCircleNumber6 className="my-5 lg:mb-10 w-[22px] h-[22px] lg:w-[44px] lg:h-[44px]" />
              <h2 className="text-2xl lg:text-5xl font-bold mb-5">
                Social Media Management
              </h2>
              <p className="text-lg lg:text-3xl lg:leading-relaxed">
                We manage everything from content planning to audience
                interaction.
              </p>
              <div className="px-5 lg:px-10 mt-4 rounded-lg shadow-lg">
                <ul className="list-disc text-left">
                  <li className="text-lg lg:text-3xl mb-3">
                    Content scheduling
                  </li>
                  <li className="text-lg lg:text-3xl mb-3">
                    Platform management
                  </li>
                  <li className="text-lg lg:text-3xl mb-3">
                    Audience engagement
                  </li>
                  <li className="text-lg lg:text-3xl">Trend monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default serviceOverview;
