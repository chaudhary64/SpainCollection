/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xxs": "375px", // min-width: 375px
        "xs": "425px", // min-width: 425px
        "3xl": "2000px", // min-width: 2000px
      },
    },
  },
  plugins: [],
};
