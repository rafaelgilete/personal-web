/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
}
