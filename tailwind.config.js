/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Berkshire Swash', 'cursive'],
        editorial: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#08051c',
          secondary: '#e1c36b',
          accent: '#7d1f2d',
          neutral: '#f2ebe3',
          'base-100': '#f2ebe3',
        },
      },
    ],
  },
};
