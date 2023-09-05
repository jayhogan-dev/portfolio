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
      fontSize: {
        heading1: [
          "64px",
          {
            lineHeight: "130%",
            fontWeight: 700,
            letterSpacing: "-0.64px",
          },
        ],
        heading2: [
          "48px",
          {
            lineHeight: "115%",
            fontWeight: 700,
            letterSpacing: "-0.48px",
          },
        ],
        heading3: [
          "32px",
          {
            lineHeight: "105%",
            fontWeight: 600,
            letterSpacing: "-0.16px",
          },
        ],
        "base-regular": [
          "24px",
          {
            lineHeight: "130%",
            fontWeight: 400,
          },
        ],
        "base-bold": [
          "24px",
          {
            lineHeight: "130%",
            fontWeight: 600,
          },
        ],
        "paragraph-regular": [
          "20px",
          {
            lineHeight: "150%",
            fontWeight: 400,
          },
        ],
        "paragraph-bold": [
          "20px",
          {
            lineHeight: "130%",
            fontWeight: 600,
          },
        ],
        "body-regular": [
          "18px",
          {
            lineHeight: "160%",
            fontWeight: 400,
          },
        ],
        "body-bold": [
          "18px",
          {
            lineHeight: "160%",
            fontWeight: 600,
          },
        ],
        "small-regular": [
          "14px",
          {
            lineHeight: "155%",
            fontWeight: 400,
          },
        ],
        "small-bold": [
          "14px",
          {
            lineHeight: "145%",
            fontWeight: 600,
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
