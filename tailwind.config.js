// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind to scan all JS/JSX/etc. files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
