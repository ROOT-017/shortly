/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Popins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(180, 66%, 49%)",
          dark: " hsl(257, 27%, 26%)",
        },
        secondary: {
          DEFAULT: "hsl(0, 87%, 67%)",
        },
        gray: "hsl(0, 0%, 75%)",
        "gray-violet": "hsl(257, 7%, 63%)",
        "dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
      fontSize: {
        "18px": "18px",
      },
      screens: {
        mobile: "375px",
        // => @media (min-width: 640px) { ... }

        tablet: "768px",
        // => @media (min-width: 768px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        deskstop: "1440px",
      },
    },
  },
  plugins: [],
};
