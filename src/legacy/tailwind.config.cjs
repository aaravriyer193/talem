/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Legacy font utilities now resolve to Geist so every page shares one type system.
        outfit: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        manrope: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        "extra-light-blue": "#f8fafc", // Correct hex code for the blog components
      },
    },
  },
  plugins: [],
};
