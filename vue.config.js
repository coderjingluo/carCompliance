const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      sandbox: false,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  },
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    resolve: { fallback: { fs: false } },
  },
});
