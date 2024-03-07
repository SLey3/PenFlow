/** @type {import('tailwindcss').Config} */
// configure path for mutliple systems

const path = require('path');

// plugin and utility paths
let tailwinddefaultThemePath = `.${path.sep}static${path.sep}node_modules${path.sep}tailwindcss${path.sep}defaultTheme`;
let flowbitePluginPath = `.${path.sep}static${path.sep}node_modules${path.sep}flowbite${path.sep}plugin`;


const defaultTheme = require(tailwinddefaultThemePath);

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
      },
      screens: {
        'sm1xs': {'raw': '(max-width: 639px)'},
      }
    },
    fontWeight: {
      '530' : '530'
    }
  },
  plugins: [
    require(flowbitePluginPath)
  ],
}

