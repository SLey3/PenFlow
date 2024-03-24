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
      keyframes: {
        expandright: {
          '0%': {
            width: '0',
            opacity: '0'
          },
          '100%': {
            width: '250px',
            opacity: '1'
          } 
        }
      },
      animation: {
        expandright: "expandright 1s ease-out"
      },
      willChange: {
        'w-vis' : 'width, opacity'
      },
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
      },
      width: {
        '62' : '250px'
      },
      fontWeight: {
        '530' : '530'
      },
      cursor: {
        'brush': 'url(../../cursors/brush.cur), default',
        'select': 'url(../../cursors/select.cur), crosshair'
      }
    }
  },
  plugins: [
    require(flowbitePluginPath)
  ],
}

