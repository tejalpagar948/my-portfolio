// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        elmessiri: ['"El Messiri"', 'sans-serif'],
        headingFont: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
