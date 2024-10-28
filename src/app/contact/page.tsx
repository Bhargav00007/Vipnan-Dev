import React from "react";
import { ContactMain } from "./contactMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <div>
      <ContactMain />
    </div>
  );
};

export default Page;
