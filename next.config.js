const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css');
const path = require('path')
const {exportPathMap} = require('nextjs-export-path-map')

module.exports = withTypescript(
  withCSS({
    cssModules: true,
    webpack: (config, { dev }) => {
      if (!dev) {
        config.devtool = 'source-map';
      }
      return config;
    },
    exportPathMap: exportPathMap.bind(null, path.join(__dirname, '/scr/pages')),
  })
)