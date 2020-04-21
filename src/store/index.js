import Vue from 'vue'
import Vuex from 'vuex'
import { getAdminInfo } from '@/api/getData'

Vue.use(Vuex)

const state = {
	adminInfo: {
		avatar: 'default.jpg'
	},
}

//使用提交mutation的方式来修改state，是为了明确的追踪的状态变化
const mutations = {
	saveAdminInfo(state, adminInfo) {
		state.adminInfo = adminInfo;
	}
}

const actions = {
	async getAdminData({ commit, state }, aa) {//等于getAdminData(context){context.commit()},解构了context
		try {
			const res = await getAdminInfo(state.adminInfo._id);
			if (res.status == 200) {
				console.log(res.data.data);

				commit('saveAdminInfo', res.data.data);//调用了mutations中的saveAdminInfo
			} else {
				throw new Error(res)
			}
		} catch (err) {
			console.warn('您尚未登陆或者session失效')
		}
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})