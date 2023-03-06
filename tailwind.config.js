/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    fluidTypography: {},
    extend: {
      fontFamily: {
        exensaBlack: ["ExensaGrotesk-Black", "sans-serif"],
        exensaBold: ["ExensaGrotesk-Bold", "sans-serif"],
        exensaRegular: ["ExensaGrotesk-Regular", "sans-serif"],
        retroChimps: ["retro-chimps", "sans-serif"],
        caSpotnik: ["ca-spotnik", "sans-serif"],
        caSpotnikBold: ["ca-spotnik-bold", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        primary: {
          50: "#f3f6f6",
          100: "#e6eded",
          200: "#c1d1d2",
          300: "#9cb5b7",
          400: "#517e81",
          500: "#07464b",
          600: "#063f44",
          700: "#053538",
          800: "#042a2d",
          900: "#032225",
        },
        alt: {
          50: "#f3f5f6",
          100: "#e7eced",
          200: "#c4ced3",
          300: "#a1b1b8",
          400: "#5a7783",
          500: "#133c4e",
          600: "#113646",
          700: "#0e2d3b",
          800: "#0b242f",
          900: "#091d26",
        },
        secondary: {
          50: "#fdf6f3",
          100: "#fbede8",
          200: "#f5d3c5",
          300: "#eeb9a1",
          400: "#e2845b",
          500: "#d54f15",
          600: "#c04713",
          700: "#a03b10",
          800: "#802f0d",
          900: "#68270a",
        },
      },
    },
  },
  plugins: [require("tailwind-fluid-typography")],
};
