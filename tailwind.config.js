/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "primary": "#18191c",
      "secondary": " #36393f",
      "text-unfocus": "#b9bbbe",
      "white": colors.white,
      black: colors.black,
      slate: colors.slate,
      violet: colors.violet
    },
    extend: {},
  },
  plugins: [],
}
