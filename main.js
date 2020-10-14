//导入vue组件
import Vue from 'vue'

// 导入根组件app
import App from './App'

// 取消生产提示
Vue.config.productionTip = false

//指定根组件类型
App.mpType = 'app'

// 挂载网络请求方法
import http from '@/utils/request.js';
Vue.prototype.$http = http;

// 挂载网络请求域名
import URL from '@/utils/config.js';
Vue.prototype.$URL = URL;

// 挂载跳转方法
import {
	navTo,
	reLaunch
} from "@/utils/navTo.js"
Vue.prototype.navTo = navTo;
Vue.prototype.reLaunch = reLaunch;

// 实例化vue组件
const app = new Vue({
	...App
})
// 进行挂载
app.$mount()
