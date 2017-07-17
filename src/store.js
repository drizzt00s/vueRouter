import Vue from '../node_modules/vue/dist/vue.js';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	items:[],
	name:''
};

const mutations = {
	ADD_ITEM(state, item){
		state.items.push(item);
	},
	DELETE_ITEM(state){
		state.items.pop();
	}
};

export default new Vuex.Store({
	state, mutations
});