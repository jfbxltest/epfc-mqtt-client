/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1600px",
    },
    extend: {
      backgroundImage: {
        "epfc-texture": "url('./page-accueil.jpg')",
      },
    },
  },
  plugins: [],
};
