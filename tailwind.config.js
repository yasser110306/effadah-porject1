/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#C89B2C", secondry: "#4A1714" },
      fontFamily: {
        messery: ["El Messiri", "sans-serif"],
      },
      spacing: { cv: "1440px" },
    },
  },
  plugins: [],
};
