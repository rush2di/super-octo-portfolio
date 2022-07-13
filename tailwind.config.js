/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          5: "#FDFDFD",
        }
      }
    },
    screens: {
      sm: "525px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      prim: ["Azo Sans", ...defaultTheme.fontFamily.sans],
      comp: ["Bely Display", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      md: ".91rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.18rem",
      xxl: "1.22rem",
      xxxl: "1.25rem",
      "0xl": "1.32rem",
      "1xl": "1.43rem",
      "2xl": "1.457rem",
      "3xl": "1.9rem",
      "4xl": "2.25rem",
      "5xl": "2.75rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    spacing: {
      0: "0",
      "0-25": "0.25rem",
      "0-45": "0.45rem",
      "0-5": "0.5rem",
      "0-75": "0.75rem",
      "0-85": "0.85rem",
      1: "1rem",
      "1-25": "1.25rem",
      "1-45": "1.45rem",
      "1-5": "1.5rem",
      "1-75": "1.75rem",
      "1-85": "1.85rem",
      2: "2rem",
      "2-25": "2.25rem",
      "2-45": "2.45rem",
      "2-5": "2.5rem",
      "2-75": "2.75rem",
      "2-85": "2.85rem",
      3: "3rem",
      "3-25": "3.25rem",
      "3-45": "3.45rem",
      "3-5": "3.5rem",
      "3-75": "3.75rem",
      "3-85": "3.85rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
      7: "7rem",
      8: "8rem",
      9: "9rem",
      10: "10rem",
      11: "11rem",
      12: "12rem",
      13: "13rem",
      14: "14rem",
      15: "15rem",
      16: "16rem",
      18: "18rem",
      20: "20rem",
      24: "24rem",
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "50%",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "525px",
        md: "768px",
        lg: "1024px",
        xl: "1120px",
      },
      gridGutters: { 1: "1.5rem" },
    }),
  ],
};
