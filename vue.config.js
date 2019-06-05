const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 16,
                        propList: ['*']
                    })
                ]
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? 'http://s.immusician.com/web/h5'
        : '/',
    chainWebpack: config => {
        const imgRule = config.module.rule('images');
        imgRule.use('image-webpack-loader')
            .loader('image-webpack-loader')
    },
    pages: {
        // 只有entry属性时，直接用字符串表示模块入口  vipConfig
        networkTest: 'src/modules/networkTest/networkTest.js',
        addTeacher: 'src/modules/addTeacher/addTeacher.js',
        searchKey: 'src/modules/searchKey/searchKey.js',
        musicBase: 'src/modules/musicBase/musicBase.js',
        aiCourseList: 'src/modules/aiCourseList/aiCourseList.js',
        vipConfig: 'src/modules/vipConfig/vipConfig.js',
        //网易100音基推广h5
        music: 'src/modules/music/music.js',
        test: 'src/modules/test/test.js',
        test1: 'src/modules/test1/test1.js',
    }
}