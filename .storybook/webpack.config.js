const path = require('path');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config, env) {
  var config = genDefaultConfig(config, env);

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [/stories/, /components/],
    loader: 'awesome-typescript-loader',
  });

  config.module.rules.push({
    test: /\.css$/,
    loader: 'css-loader',
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.resolve.extensions.push('.js');
  config.resolve.extensions.push('.css');
  config.resolve.extensions.push('.less');

  return config;
};
