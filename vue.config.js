const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'src/assets/images/svg')) // 排除自定义svg目录
      .end()
    config.module
      .rule('icons') // 新规则
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'src/assets/images/svg')) // 新规则应用于我们存放svg的目录
      .end()
      .use('svg-sprite-loader') // 用sprite-loader接卸
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}