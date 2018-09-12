// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
/**
 * 创建一个vue实例，
 * el:index.html中和App.vue中都包含#app，但是App.vue中的模板会完全替换index.html内容
 * template: 模板，可以认为以“.vue”结尾的文件都是模板，主要使用了App.vue中的html内容，用于承载组建内容，在js中直接使用
 * 导入的变量名作为模板名，在vue文件中使用注册的name的值，标签不区分大小写
 * components: 主要使用了script内容
 */