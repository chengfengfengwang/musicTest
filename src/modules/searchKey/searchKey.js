import Vue from 'vue'
import searchKey from './searchKey.vue'


import '../../assets/common.less'
import axios from 'axios'
Vue.prototype.axios = axios;

new Vue({
    render: h => h(searchKey)
}).$mount('#searchKey')