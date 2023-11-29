const someAsyncPlugin = require('some-async-plugin');

module.exports = {
    plugins: [
      someAsyncPlugin(),
      require('tailwindcss'),
      require('autoprefixer'),
      // Ajoutez d'autres plugins au besoin
    ],
  };
  