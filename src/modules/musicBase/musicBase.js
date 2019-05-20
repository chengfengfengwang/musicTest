import Vue from 'vue'
import musicBase from './musicBase.vue'



import '../../assets/common.less'
import axios from 'axios'
Vue.prototype.axios = axios;

new Vue({
    render: h => h(musicBase)
}).$mount('#musicBase')