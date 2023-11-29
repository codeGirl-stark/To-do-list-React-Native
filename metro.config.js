// metro.config.js

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-postcss-transformer'),
    },
    resolver: {
      assetExts: ['jpeg', 'jpg', 'png', 'gif'],
    },
  };
})();
