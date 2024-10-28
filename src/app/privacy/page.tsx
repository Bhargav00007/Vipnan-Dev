import React from "react";
import { PrivacyMain } from "./privacyMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
};

const Page = () => {
  return (
    <div>
      <PrivacyMain />
    </div>
  );
};

export default Page;
