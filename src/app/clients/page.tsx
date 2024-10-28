import React from "react";
import ClientsMain from "./clientsMain";
import { OurClients } from "./ourClients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients",
};

const Page = () => {
  return (
    <div>
      <ClientsMain />
      <OurClients />
    </div>
  );
};

export default Page;
