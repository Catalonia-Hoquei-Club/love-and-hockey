/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          lilita: ['"Lilita One"', 'cursive'],
        },
        colors: {
          primary: "#e04a2a",
          secondary: "#f3b02f",
          black: "#000000",
        },
      },
    },
    plugins: [],
  }