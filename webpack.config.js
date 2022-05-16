const webpackConfig = {
  target: 'node',
  node: {
    fs: 'empty',
  },
};

module.exports = webpackConfig; // Export all custom Webpack configs.
