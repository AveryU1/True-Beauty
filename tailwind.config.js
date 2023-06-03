/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#262626",
        secondary: "#FFAF00",
        tertiary: "#505050",

        "footer-background": "#222122",
        "footer-text": "#FAFAFA",
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins)", "sans-serif"],
      vidaLoka: ["var(--font-vidaLoka)", "sans-serif"],
    },
    screens: {
      xs: { min: "375px" },
      ...defaultTheme.screens,
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
  },
  plugins: [],
};
