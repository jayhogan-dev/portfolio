import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": {
          light: "#155e75",
          dark: "#06b6d4",
        },
        secondary: "#fde047",
        "primary-white": {
          500: "#6F74A7",
          800: "#F3F8FF",
        },
        "primary-black": {
          200: "#151E2C",
          300: "#29374C",
          400: "#778295",
        },
      },
    },
  },
  plugins: [],
};
export default config;
