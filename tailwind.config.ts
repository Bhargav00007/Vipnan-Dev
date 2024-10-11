import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-green": "rgba(87, 232, 186, 0.25)", // Custom green color
        "navbar-green": "rgba(87, 232, 186, 0.07  )",
        "regular-green": "#57E8BA",
        "green-glow": "0 4px 6px rgba(87, 232, 186, 0.9)", // Green shadow
        "custom-border": "rgba(160, 143, 163, 0.2)",
        "custom-white": "#F5FFFC",
        black: {
          DEFAULT: "#070B0A", // Black color
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(ellipse at center 50%, rgba(87, 232, 186, 0.2) 0%, rgba(7, 11, 10, 1) 70%)",
        "footer-gradient":
          "radial-gradient(ellipse at center 50%, rgba(87, 232, 186, 0.2) 0%, rgba(7, 11, 10, 1) 70%)",
      },
      boxShadow: {
        custom: "0 4px 4px rgba(87, 232, 186, 0.5)",
      },
      blur: {
        sm: "4px",
        md: "10px",
        lg: "20px",
        xl: "30px",
        "2xl": "40px",
        "3xl": "60px",
        "4xl": "100px",
        custom: "187.5px",
      },
      spacing: {
        "917.67": "917.67px",
        "535.68": "535.68px",
        "810.75": "810.75px",
        "1232.25": "1232.25px",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};

export default config;
