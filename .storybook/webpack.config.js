// load the default config generator.
const genDefaultConfig = require("@kadira/storybook/dist/server/config/defaults/webpack.config.js");
const path = require("path");

module.exports = (config, env) => {
  let generated_config = genDefaultConfig(config, env);
  //Can't figure out how to handle font files but this
  //Gets hmr working :D
  //I think we need to add absolute Urls to the style-loader but webpack1 is hard
  generated_config.module.loaders.push({
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: "file-loader",
    query: {
      // limit: 10000,
      name: "static/media/[name].[hash:8].[ext]"
    }
  });
  generated_config.module.loaders.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });
  // Extend it as you need.

  return generated_config;
};
