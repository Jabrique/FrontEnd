/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%': {transform: 'scale(0)', opacity: 0},
          '100%': {transform: 'scale(1)', opacity: 1}
        },
        slideNav: {
          '0%': {width:'20%', opacity:0},
          '100%': {width:'120%', opacity:1}
        }
      },
      animation: {
        zoom: 'zoom 1s ease-in-out backwards',
        slideNav: 'slideNav 1s ease backwards'
      }
    },
  },
  plugins: [],
}
