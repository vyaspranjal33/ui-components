// load the default config generator.
const genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (config: any, env: any) => {
  let generated_config = genDefaultConfig(config, env);

  generated_config.module.loaders.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  // Extend it as you need.

  return generated_config;
};
