module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? 'http://s.immusician.com/web/test'
    : '/',
    pages: {
        // 只有entry属性时，直接用字符串表示模块入口
        index:'src/modules/index/index.js',
        about:'src/modules/about/about.js',
        console: 'src/modules/console/console.js',
        client: 'src/modules/client/client.js'
    }
}