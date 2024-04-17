/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./srd/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./light.css", // Include theme files
    "./dark.css",
  ],
  theme: {
    extend: {
      dark: {
        backgroundColor: "black"
      },
      light: {
        backgroundColor: "gray"
      }
    },
  },
  plugins: [],
}