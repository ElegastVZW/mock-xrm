module.exports = {
  publicPath: "",
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {
    // No need for splitting
    optimization: {
      splitChunks: false,
    },
  },
  css: {
    extract: true,
  },
};
