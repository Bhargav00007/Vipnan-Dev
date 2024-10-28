import React from "react";
import ServiceMain from "./serviceMain";
import ServiceOverview from "./serviceOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const Page = () => {
  return (
    <div>
      <ServiceMain />
      <ServiceOverview />
    </div>
  );
};

export default Page;
