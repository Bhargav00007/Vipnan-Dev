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
        'green-glow': '0 4px 6px rgba(87, 232, 186, 0.9)', //green shadow 
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
        'custom': '0 4px 4px rgba(87, 232, 186, 0.3)', // Example: green shadow
      },
    },
  },
  plugins: [],
};

export default config;
