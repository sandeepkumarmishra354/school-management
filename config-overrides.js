const { override, fixBabelImports, addLessLoader,setWebpackTarget } = require("customize-cra");

const addWebpackTarget = (target) => (config) => {
  config.target = target;
  return config;
};

module.exports = override(
  setWebpackTarget("electron-renderer"),
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
