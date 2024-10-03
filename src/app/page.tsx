"use client";
import React from 'react';
import Navbar from './Components/Navbar';
import { Main } from './Home/Main';
import  Carousel  from './Home/Carousel';
import { Features } from './Home/Features';

const Page = () => {
  return (
    <div >
      <Navbar />
      <Main />
      <Carousel />
      <Features />
    </div>
  );
};

export default Page;
