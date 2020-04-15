import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/**
 * @符号代表src目录，@config代表config目录
 * require.ensure() 方法来实现代码打包分离
 * require.ensure() 是 webpack 特有的，已经被 import() 取代。
 * require.ensure(dependencies: String[], callback: function(require), chunkName: String)
*/
const login = () => import('@/page/login');
const menubar = () => import('@/page/menubar');
const home = () => import('@/page/home');
const websiteList = () => import('@/page/website-list');
const componentList = () => import('@/page/component-list');
// const addShop = () => import('@/page/addShop');
// const addGoods = () => import('@/page/addGoods');
// const userList = () => import('@/page/userList');
// const shopList = () => import('@/page/shopList');
// const foodList = () => import('@/page/foodList');
// const orderList = () => import('@/page/orderList');
// const adminList = () => import('@/page/adminList');
// const visitor = () => import('@/page/visitor');
// const newMember = () => import('@/page/newMember');
// const uploadImg = () => import('@/page/uploadImg');
// const vueEdit = () => import('@/page/vueEdit'));
const adminSet = () => import('@/page/adminSet');
// const sendMessage = () => import('@/page/sendMessage');
// const explain = () => import('@/page/explain');
const drag = () => import('@/page/drag');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: menubar,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		}, {
			path: '/websiteList',
			component: websiteList,
			meta: ['网站管理', '网站列表'],
		}, {
			path: '/componentList',
			component: componentList,
			meta: ['网站管理', '组件列表'],
		}, {
			path: '/drag',
			component: drag,
			mate: ['网站管理', '拖拽']
		}
			// , {
			// 	path: '/addShop',
			// 	component: addShop,
			// 	meta: ['添加数据', '添加商铺'],
			// }, {
			// 	path: '/addGoods',
			// 	component: addGoods,
			// 	meta: ['添加数据', '添加商品'],
			// }, {
			// 	path: '/userList',
			// 	component: userList,
			// 	meta: ['数据管理', '用户列表'],
			// }, {
			// 	path: '/shopList',
			// 	component: shopList,
			// 	meta: ['数据管理', '商家列表'],
			// }, {
			// 	path: '/foodList',
			// 	component: foodList,
			// 	meta: ['数据管理', '食品列表'],
			// }, {
			// 	path: '/orderList',
			// 	component: orderList,
			// 	meta: ['数据管理', '订单列表'],
			// }, {
			// 	path: '/adminList',
			// 	component: adminList,
			// 	meta: ['数据管理', '管理员列表'],
			// }, {
			// 	path: '/visitor',
			// 	component: visitor,
			// 	meta: ['图表', '用户分布'],
			// }, {
			// 	path: '/newMember',
			// 	component: newMember,
			// 	meta: ['图表', '用户数据'],
			// }, {
			// 	path: '/uploadImg',
			// 	component: uploadImg,
			// 	meta: ['文本编辑', 'MarkDown'],
			// }, {
			// 	path: '/vueEdit',
			// 	component: vueEdit,
			// 	meta: ['编辑', '文本编辑'],
			// }
			, {
			path: '/adminSet',
			component: adminSet,
			meta: ['设置', '管理员设置'],
		}
			// , {
			// 	path: '/sendMessage',
			// 	component: sendMessage,
			// 	meta: ['设置', '发送通知'],
			// }, {
			// 	path: '/explain',
			// 	component: explain,
			// 	meta: ['说明', '说明'],
			// }
		]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
