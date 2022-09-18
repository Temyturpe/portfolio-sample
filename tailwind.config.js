/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },

      backgroundImage: {
        "pinky-img": 'url("/Images/BACKGROUND.png")',
      },
    },
  },
  plugins: [],
};
