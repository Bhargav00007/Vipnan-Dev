"use client";
import React from "react";
import { Main } from "./Home/Main";
import Carousel from "./Home/Carousel";
import { Features } from "./Home/Features";
import { Services } from "./Home/Services";
import { Overview } from "./Home/Overview";
import Showreel from "./Home/Showreel";

const Page = () => {
  return (
    <div>
      <Main />
      <Showreel />
      {/* <Carousel /> */}
      <Features />
      <Services />
      <Overview />
    </div>
  );
};

export default Page;
