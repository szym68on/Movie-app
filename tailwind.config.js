/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fontColor: "#fff",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        sm: ["14px"],
        base: ["16px"],
        lg: ["24px"],
        xl: ["48px"],
      },
    },
  },
  plugins: [],
};
