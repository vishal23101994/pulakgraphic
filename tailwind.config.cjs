/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        spiritual: {
          cream: "#FFF8E7",
          soft: "#FFFDF6",
          brown: "#4B1E00",
          maroon: "#7a1c1c",
          gold: "#FCD34D",
          lightGold: "#FDE68A",
          amber: "#D97706",
        },
      },
    },
  },

  plugins: [],
};