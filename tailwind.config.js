/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', ...defaultTheme.fontFamily.sans],
        mooli: ['"mooli"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        dark: "url('./dark-bg.jpeg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
