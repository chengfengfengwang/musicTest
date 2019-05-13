import Vue from 'vue'
import searchKey from './searchKey.vue'

//import fakervue from 'fakervue'
import 'fakervue/dist/fakervue.css'
import fakervue from 'fakervue'

Vue.use(fakervue)

import '../../assets/common.less'
import axios from 'axios'
Vue.prototype.axios = axios;

new Vue({
    render: h => h(searchKey)
}).$mount('#searchKey')