/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      // custom spacing
      spacing: {
        13: '3.25rem',
      }
    },
    fontFamily:{
      'Poppins' : ['Poppins']
    }
  },
  plugins: [require('flowbite/plugin')
],
}
