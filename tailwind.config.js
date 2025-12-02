/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DC2626",
          dark: "#B91C1C",
          light: "#EF4444",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"], // ← Only dark theme
    darkTheme: "dark", // ← Force dark theme TODO: add a light and dark mode config later
  },
};