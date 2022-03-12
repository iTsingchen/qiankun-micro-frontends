const { EnvironmentPlugin } = require("webpack");

const { slugToPort } = require("@qiankun-micro/utils");

const { name } = require("./package.json");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new EnvironmentPlugin({
          __LIFECYCLE_NAME_FOR_QIANKUN__: name,
        }),
      ],
    },
  },
  devServer: {
    port: slugToPort(name),
  },
};
