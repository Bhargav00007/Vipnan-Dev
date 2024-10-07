"use client";
import React from 'react';
import { Main } from './Home/Main';
import  Carousel  from './Home/Carousel';
import { Features } from './Home/Features';
import { Services } from './Home/Services';
import { Overview } from './Home/Overview';
import { Footer } from './Components/Footer';

const Page = () => {
  return (
    <div >
      <Main />
      <Carousel />
      <Features />
      <Services />
      <Overview />
      <Footer />
    </div>
  );
};

export default Page;
