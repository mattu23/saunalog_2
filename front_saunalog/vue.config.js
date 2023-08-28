const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "TechpitNotion",
    }
  },
  devServer: {
    port: 8080,
    // disableHostCheck: true,
    host: 'localhost'
  }
};
