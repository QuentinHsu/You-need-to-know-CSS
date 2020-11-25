module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // 配置首页 HTML Title 内容
          // 开发环境：每次修改后只能重启服务才可生效
        args[0].title = 'You need to know CSS'
        return args
      })
  }
}