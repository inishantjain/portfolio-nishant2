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
        dark: "linear-gradient(86deg, rgba(32,32,32,1) 0%, rgba(8,121,129,1) 35%, rgba(64,82,132,1) 100%)",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
