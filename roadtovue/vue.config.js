module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Vue - The Road To Enterprise (Companion App)'
      return args
    })
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/styles/_colors.scss";
          @import "~@/styles/_fonts.scss";
          @import "~@/styles/_sizes.scss";
        `,
      },
    },
  },
}
