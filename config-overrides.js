const { override, fixBabelImports, addLessLoader,setWebpackTarget } = require("customize-cra");

const addWebpackTarget = (target) => (config) => {
  config.target = target;
  return config;
};

module.exports = override(
  setWebpackTarget("web"),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  })
);
