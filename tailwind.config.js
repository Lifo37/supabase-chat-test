/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "primary": "#18191c",
      "text-unfocus": "#b9bbbe",
      "white": colors.white,
      black: colors.black,
      slate: colors.slate
    },
    extend: {},
  },
  plugins: [],
}
