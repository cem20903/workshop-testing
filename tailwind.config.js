/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
    'green': '#5EBEA3',
    'grey-extra-light': '#F4F4F4',
    'grey-light': 'rgba(181, 181, 181, .2)',
    'grey-light-1': '#B5B5B5',
    'grey-dark': '#3F3F3F',
    'salmon': '#FF9984',
    'white': '#FFFFFF',
    'hover-blue': '#D8F2EC'
    },
    fontSize: {
      'small': '12px',
      'medium': '15px'
    },
    extend: {},
  },
  plugins: [],
}
