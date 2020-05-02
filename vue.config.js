// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        prependData: `@import "./src/assets/style/common.scss";`
      }
    }
  },
  devServer: {
    // proxy: {
    //   "/api": {
    //     target: "http://yapi.demo.qunar.com",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "/mock/96945/api"   
    //     }
    //   }
    // }
  }
};
