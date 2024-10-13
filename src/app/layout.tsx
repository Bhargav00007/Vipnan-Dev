import type { Metadata } from "next";
import "./globals.css"; // Ensure this imports your global styles
import Script from "next/script";
import Head from "next/head";
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { dmSans, poppins } from "./font/font";

export const metadata: Metadata = {
  title: "Vipnan",
  description: "Awesome website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${dmSans.variable} ${poppins.variable} antialiased font-dmSans`}
      >
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
