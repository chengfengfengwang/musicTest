import Vue from 'vue'
import test from './test.vue'


import '../../assets/common.less'
import axios from 'axios'
Vue.prototype.axios = axios;

new Vue({
    render: h => h(test)
}).$mount('#test')