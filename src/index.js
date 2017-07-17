import Vue from '../node_modules/vue/dist/vue.js';
import Vuex from 'vuex';
import { mapState } from 'vuex';
import VueRouter from 'vue-router';
Vue.use(Vuex);
Vue.use(VueRouter);

var Home = Vue.extend({
	template:"<p>This is home page</p>"
});

var List = Vue.extend({
	template:"<p>This is list page</p>"
});

var Biz = Vue.extend({
	template:"<div>\
				<h3>This is some business channel</h3>\
				<div>\
					<ul>\
					<li>\
						<a v-link='{path:\"/biz/list\"}'>List</a>\
					</li>\
					<li>\
						<a v-link='{path:\"/biz/detail\"}'>Detail</a>\
					</li>\
				</div>\
				<router-view></router-view>\
				</div>"
});



var App = Vue.extend({});

var router = new VueRouter();

router.map({
	'/home':{
		component:Home
	},
	'/list':{
		component:List
	},
	'/biz':{
		component:Biz,
		subRoutes:{
			'/list':{
				component:{
					template:'<h3>This is the business list page</h3>'
				}
			},
			'/detail':{
				component:{
					template:'<h3>This is the business business page</h3>'
				}
			}
		}
	}
});

router.start(App, '#app');




// const store = new Vuex.Store({
// 	state:{
// 		count: 111
// 	},
// 	mutations:{
// 		increment:function(state) {
// 			state.count++
// 		}
// 	}
// });

// var side = Vue.extend({
// 	template:"<ul>\
// 				<li @click='add()'>增加</li>\
// 				<li @click='dele()'>删除</li>\
// 				<li @click='count()'>count</li>\
// 				<p>{{cum}}</p>\
// 			 </ul>",
// 	methods:{
// 		add:function(){
// 			this.$store.commit('increment');
// 		},
// 		dele:function(){
			
// 		},
// 		count:function(){
// 		}
// 	},
// 	// computed:{
// 	// 	cum:function(){
// 	// 		return this.$store.state.count;
// 	// 	}
// 	// }
// 	computed: mapState ({
// 		count: state => state.count,
// 		countAlias: 'cum1',    // 别名 `count` 等价于 state => state.count
// 	})

// });

// var content = Vue.extend({
// 	template:"<div class='content'>\
// 			   <div class='item' v-for='item in items'>\
// 			   	{{item.content}}\
// 			   </div>\
// 			  </div>"

// });

// var main = Vue.extend({
// 	template:"<div>\
// 				<p>{{mainCum}}</p>\
// 	 			<side></side>\
// 	 			<content></content>\
// 	 		  </div>",
// 	components:{
// 		'content':content,
// 		'side':side
// 	},
// 	computed:{
// 		mainCum:function(){
// 			return this.$store.state.count
// 		}
// 	}
// });

// Vue.component("main", main);

// var vm = new Vue({
// 	el:"#app",
// 	store
// });









