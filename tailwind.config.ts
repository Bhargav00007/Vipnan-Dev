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
        'custom-green': 'rgba(87, 232, 186, 0.25)', // Custom green color
        'regular-green': '#57E8BA',
        'green-glow': '0 4px 6px rgba(87, 232, 186, 0.9)', // Green shadow
        black: {
          DEFAULT: "#070B0A", // Black color
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(ellipse at center 45%, rgba(87, 232, 186, 0.1) 0%, rgba(7, 11, 10, 1) 70%)',
      },
      boxShadow: {
        'custom': '0 4px 4px rgba(87, 232, 186, 0.5)', 
      },
      blur: {
        'sm': '4px',    // Small blur
        'md': '10px',   // Medium blur
        'lg': '20px',   // Large blur
        'xl': '30px',   // Extra large blur
        '2xl': '40px',  // Double extra large blur
        '3xl': '60px',  // Triple extra large blur
        '4xl': '100px', // Quadruple extra large blur
        'custom': '187.5px', // Custom blur value
      },
      spacing: {
        '917.67': '917.67px',
        '535.68': '535.68px',
        '810.75': '810.75px',
        '1232.25': '1232.25px',
      },
      zIndex: {
        '-1': '-1', // Custom negative z-index
      },
    },
  },
  plugins: [],
};

export default config;
