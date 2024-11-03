const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  devServer: {
    port: 12543,
    host: '0.0.0.0',
    allowedHosts: [
      'tappi.partiallyorderedmagic.com'
    ],
    headers: {
      'Access-Control-Allow-Origin': 'http://tappi.partiallyorderedmagic.com',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
  }
})
