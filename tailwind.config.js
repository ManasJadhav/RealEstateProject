/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      navbar: ["Poppins"],
    },
    extend: {
      colors: {
        blueOg: "#0C2D65",
        // colorShadow: "#E1E7FF",
        colorShadow: "#c2ceff",
        body: "#022661",
      },
      spacing: {
        74: "310px",
      },
      shadows: {},
    },
  },
  plugins: [],
};
