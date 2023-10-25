/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius:{
      'md':'15px',
      'lg':'100px',
      'xl':'15.2rem'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

