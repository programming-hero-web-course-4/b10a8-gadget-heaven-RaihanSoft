/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./src/assets/banner.jpg')",
      },
      colors: {
        'prime': '#9538E2',
      },
    },
  },
  plugins: [daisyui,],
}