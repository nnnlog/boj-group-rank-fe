import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from 'axios';

export default new Vuex.Store({
	state: {
		members: []
	},
	mutations: {
		setMembers(state, members) {
			state.members = members;
		}
	},
	actions: {
		async syncMembers({commit}) {
			commit('setMembers', (await axios.get(`${location.origin}/api/members`, {json: true})).data);
		}
	},
	getters: {
		members(state) {
			return state.members;
		}
	}
})
