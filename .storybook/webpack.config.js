const path = require('path');
const storybookBaseConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config, env) {
  config = storybookBaseConfig(config, env);

  // To show JSX in storybook:
  // Transpile TSX to JSX with "preserve"
  // Use babel to transpile JSX to ES5 JS
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [/stories/, /components/],
    loaders: [
      {
        // JSX -> JS. uses .babelrc
        loader: 'babel-loader',
      },
      {
        // Loaders run bottom to top. JSX on story
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            parser: 'babylon', //The default prettier parser (we might want 'flow' in future)
          },
        },
      },
      {
        loader: 'awesome-typescript-loader',
        options: {
          // config has jsx: preserve. TSX->JSX
          configFileName: path.resolve(__dirname, 'tsconfig.json'),
        },
      },
    ],
    enforce: 'pre',
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

  config.resolve.mainFiles = ['index'];
  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.resolve.extensions.push('.js');
  config.resolve.extensions.push('.jsx');
  config.resolve.extensions.push('.css');
  config.resolve.extensions.push('.scss');

  return config;
};
