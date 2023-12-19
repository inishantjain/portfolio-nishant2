/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent100: "hsl(29, 100%, 50%)",
        accent200: "hsl(29, 99%, 43%)",
        accent500: "hsl(29, 99%, 35%)",
        accent700: "hsl(29, 100%, 25%)",
        accent900: "hsl(29, 100%, 20%)",
      },
      fontFamily: {
        exo: ['"Exo 2"', ...defaultTheme.fontFamily.sans],
        mooli: ['"mooli"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        dark: "linear-gradient(180deg, rgba(32,32,32,1) 0%, rgba(8,121,129,1) 35%, rgba(64,82,132,1) 100%)",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
