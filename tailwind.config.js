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
        tootip: "#1C2B3A",
      },
      outlineColor: {
        focused: "#FFCEFB",
      },
      textColor: {
        accent: "#6DEAFF",
        secondaryAccent: "#FFCEFB",
        type: "#BCA7CE",
      },
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

