import Vue from 'vue'
import test from './test.vue'
console.log('zz')
//import fakervue from 'fakervue'
import 'fakervue/dist/fakervue.css'
import fakervue from 'fakervue'

Vue.use(fakervue)

import '../../assets/common.less'
import axios from 'axios'
Vue.prototype.axios = axios;

new Vue({
    render: h => h(test)
}).$mount('#test')