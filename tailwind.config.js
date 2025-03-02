/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "custom": 'rgba(9, 14, 50, 1)',
        },
        fontFamily: {
          sans: ["Graphik", "sans-serif"],
          serif: ["Merriweather", "serif"],
        },
      },
    },
    plugins: [],
  };
  