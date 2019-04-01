import Vue from 'vue'
import About from './About.vue'
import '../../assets/common.less'
//import 'iview/dist/styles/iview.css';


new Vue({
    render: h => h(About)
}).$mount('#about')