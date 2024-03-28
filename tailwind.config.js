/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.clip-polygon-1': {
          'clip-path': 'polygon(0 0, 19% 0, 67% 100%, 0 100%)',
        },
        '.clip-polygon-2': {
          'clip-path': 'polygon(30% 100%, 70% 100%, 82% 0, 18% 0)',
        },
        '.clip-polygon-3': {
          'clip-path': 'polygon(71% 0, 100% 0, 100% 99%, 30% 100%)',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}