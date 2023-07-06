/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "75%": { opacity: 0 },
          "90%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }
    },
  },
  plugins: [],
}

