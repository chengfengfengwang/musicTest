module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? 'http://s.immusician.com/web/test'
    : '/',
    pages: {
        // 只有entry属性时，直接用字符串表示模块入口
        index:'src/modules/index/index.js',
        about:'src/modules/about/about.js',
        course: 'src/modules/course/course.js',
        client: 'src/modules/client/client.js',
        //移动端
        index_mob:'src/modules/index_mob/index_mob.js',
        about_mob:'src/modules/about_mob/about_mob.js',
    }
}