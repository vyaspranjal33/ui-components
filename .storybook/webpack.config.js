const path = require('path');

module.exports = {
  entry: 'index.jsx',
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.scss$/,
          /\.json$/,
          // /\.svg$/,
          /\.hbs$/,
          // This one is for the google loader specifically
          /jsapi$/,
        ],
        loader: 'file-loader',
        query: {
          // limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
};
