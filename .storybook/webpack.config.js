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
    exclude: [/node_modules/, /test_image/],
    include: [/stories/, /components/, /src/],
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
          useTranspileModule: true,
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
    exclude: [/\.module.scss$/],
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.module.scss$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  });

  config.resolve.mainFiles = ['index'];
  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.resolve.extensions.push('.js');
  config.resolve.extensions.push('.jsx');
  config.resolve.extensions.push('.css');
  config.resolve.extensions.push('.scss');

  config.plugins = config.plugins.filter(
    plugin => plugin.constructor.name !== 'UglifyJsPlugin'
  );

  return config;
};
