/* eslint-disable global-require */

module.exports = {
  title: 'React Kit by @palvikas5',
  styleguideDir: 'docs',
  sections: [
    {
      name: 'Core UI Components',
      components: 'src/components/**/[A-Z]*.tsx',
    },
  ],
  serverHost: '0.0.0.0',
  serverPort: 6060,
  webpackConfig: {
    ...require('./webpack.config'),
    devServer: {
      transportMode: 'ws', // Use 'ws' instead of 'sockjs-node' and don't inject sockjs-node
      injectClient: false, // Use 'ws' instead of 'sockjs-node' and don't inject sockjs-node
    },
  },
}
