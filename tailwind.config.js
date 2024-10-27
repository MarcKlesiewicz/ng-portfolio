/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#050024',
          secondary: '#7e6300',
          accent: '#600106',
          neutral: '#ece4dc',
          'base-100': '#ece4dc',
        },
      },
    ],
  },
};
