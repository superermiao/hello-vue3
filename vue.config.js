'use strict'
// eslint-disable-next-line @typescript-eslint/no-var-requires

const devServer = {
  port: 8082,
  disableHostCheck: true,
  open: true,
  hot: true, // 自动保存
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8000', // 开发环境
      changeOrigin: true,
      proxyTimeout: 1000 * 60,
      timeout: 1000 * 60,
      logLevel: 'debug',
      headers: {
        Connection: 'keep-alive'
      }
    }
  }
}
module.exports = {
  devServer
}
