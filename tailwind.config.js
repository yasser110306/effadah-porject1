/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#C89B2C", secondry: "#4A1714", quotes: "#EAEDEE" },
      fontFamily: {
        messery: ["El Messiri", "sans-serif"],
      },
      fontSize: { "2l": "40px" },
      spacing: { cv: "1440px" },
      screens: {
        "2xl-max": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "xl-max": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "lg-max": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "md-max": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "sm-max": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
