/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '1.950rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      dropShadow: {
        '3xl': '0 1px 5px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
