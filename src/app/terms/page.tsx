import React from "react";
import { TermsMain } from "./termsMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

const Page = () => {
  return (
    <div>
      <TermsMain />
    </div>
  );
};

export default Page;
