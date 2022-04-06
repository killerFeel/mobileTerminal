const path = require('path');
const webpack = require('webpack');
module.exports = {
    pwa: {
        iconPaths: {

            favicon32: 'favicon.ico',

            favicon16: 'favicon.ico',

            appleTouchIcon: 'favicon.ico',

            maskIcon: 'favicon.ico',

            msTileImage: 'favicon.ico'

        }
    },
    // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
    outputDir: 'dist',
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: 'static',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // webpack-dev-server 相关配置
    devServer: {
        host: '192.168.12.237',
        open: true,
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve('src')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            }),
        ]
    }
};
