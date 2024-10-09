import React from "react";
import AboutMain from "./aboutMain";
import { AboutOverview } from "./aboutOverview";
import AboutCarousel from "./aboutCorousel";

const Page = () => {
  return (
    <div>
      <AboutMain />
      <AboutOverview />
      <AboutCarousel />
    </div>
  );
};

export default Page;
