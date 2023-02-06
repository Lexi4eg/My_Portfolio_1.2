/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: "#171819",
        türkis: "#36fad7",
        red1: "#F76C6C",
      },
      fontFamily: {
        la: ["La Belle Aurore", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
