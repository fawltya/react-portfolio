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
        primary: "#440001",
        secondary: "#777711",
      },
    },
  },
  plugins: [require("tailwind-fluid-typography")],
};
