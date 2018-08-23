const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(
  withCSS({
    cssModules: true,
    webpack: (config, { dev }) => {
      if (!dev) {
        config.devtool = 'source-map';
      }
      return config;
    }
  })
)