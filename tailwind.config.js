/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#003950",
        secondary: "#014961",
      },
      textColor: {
        accent: "#6DEAFF",
        type: "#BCA7CE"
      }
    },
  },
  plugins: [],
}

