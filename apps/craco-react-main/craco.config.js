const { slugToPort } = require("@qiankun-micro/utils");

const { name } = require("./package.json");

module.exports = {
  devServer: {
    port: slugToPort(name),
  },
};
