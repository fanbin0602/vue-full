// 用于做相应的合并处理
const merge = require('webpack-merge');

module.exports = {

    // 生产环境开启 source map
    productionSourceMap: true,

    // 使用链式操作修改 Webpack 配置
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => {
                merge(options, {
                    limit: 5120
                })
            })
    },

    // 使用 vue inspect （或者 vue inspect plugins）命令查看修改后的 Webpack 配置

    // 本地服务器配置
    devServer: {
        open: true, // 是否自动打开浏览器页面
        // host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
        port: 8080, // 端口地址
        https: false, //是否使用 https
        proxy: null, // String | Object, 代理设置
    }


}