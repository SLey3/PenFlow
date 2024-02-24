/** @type {import('tailwindcss').Config} */

const defaultTheme = require("./static/node_modules/tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js",
    "./static/node_modules/flowbites/**/*.js"
  ],
  theme: {
    container: {
      padding: '1.5rem'
    },
    extend: {
      fontFamily: {
        dancing: [
          '"Dancing Script", cursive', {
            fontVariationSettings: '"wght" 500'
          }
        ],
        ptsans: [
          '"PT Sans", sans-serif', {
            fontVariationSettings: '"wght" 400'
          }
        ],
        notoserif: [
          ['"Noto Serif"', defaultTheme.fontFamily.serif], {
            fontVariationSettings: '"wdth" 100'
          }
        ]
      }
    },
    fontWeight: {
      '530' : '530'
    }
  },
  plugins: [
    require("./static/node_modules/flowbite/plugin")
  ],
}

