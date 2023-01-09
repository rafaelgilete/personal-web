/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
}
