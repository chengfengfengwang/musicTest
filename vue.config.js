module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? 'http://s.immusician.com/web/h5'
    : '/',
    chainWebpack:config=>{
        const imgRule = config.module.rule('images');
        imgRule.use('image-webpack-loader')
        .loader('image-webpack-loader')
      },
    pages: {
        // 只有entry属性时，直接用字符串表示模块入口
        networkTest:'src/modules/networkTest/networkTest.js',
        addTeacher:'src/modules/addTeacher/addTeacher.js',
        searchKey:'src/modules/searchKey/searchKey.js',
        musicBase:'src/modules/musicBase/musicBase.js',
        aiCourseList:'src/modules/aiCourseList/aiCourseList.js',
        test:'src/modules/test/test.js',
    }
}