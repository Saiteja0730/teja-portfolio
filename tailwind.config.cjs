/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#4A3427",
        bg_light_primary: "#FDF8F5",
        gray: "#8B7355",
        brown_accent: "#8B4513",
        brown_light: "#DEB887",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #DEB887 0.48%, #8B4513 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(139, 69, 19, 0.2)",
      }
    },
  },
  plugins: [],
};
