const { join } = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {}, // Add this line for Tailwind CSS nesting
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
