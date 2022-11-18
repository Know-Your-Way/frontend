const { yellow } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1040px',
      xl: '1240px'
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}