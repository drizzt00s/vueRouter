import Vue from '../node_modules/vue/dist/vue.js';
import store from './store';
import {addItem} from './action';
import {deleteItem} from './action';

var side = Vue.extend({
	template:"<ul>\
				<li @click='add()'>增加</li>\
				<li @click='dele()'>删除</li>\
			 </ul>",
	methods:{
		add:function(){
			addItem({content:Math.random()});
		},
		dele:function(){
			deleteItem();
		}
	}
});

var content = Vue.extend({
	template:"<div class='content'>\
			   <div class='item' v-for='item in items'>\
			   	{{item.content}}\
			   </div>\
			  </div>"

});

var main = Vue.extend({
	template:"<div><side></side><content></content></div>",
	components:{
		'content':content,
		'side':side
	}
});

Vue.component("main", main);

var vm = new Vue({
	el:"#app"
});




// const store = new Vuex.Store({
  
//   // "State" is the application data your components
//   // will subscribe to
  
//   state: {     
//     myValue: 1  
//   },
//   mutations:{
//   	increment:function(state, value){
//   		state.myValue += value;
//   	}
//   }
// });

// var myComponent = Vue.extend({
//     template: "<div>{{value}}</div> <button v-on:click='update'>increase</button>",
//     data:function(){
//     	return {
//     		msg: store.state.myValue
//     	}
//     },
//     methods:{
//     	update:function(){
//     		store.commit('increment', 10);
//     	}
//     },
//     computed:{
//     	value(){
//     		return store.state.myValue
//     	}
//     }
// })

// Vue.component('my-component', myComponent);

// new Vue({
// 	el:"#app"
// });


// var bus = new Vue();
// var vm = new Vue({
// 	el:"#app",
// 	components:{
// 		'compA':{
// 			template:"<div>\
// 						<input type='text' v-model='name' />\
// 						<button @click='create'>添加</button<\
// 					<div>",
// 			data:function(){
// 				return {
// 					name:""
// 				}
// 			},
// 			methods:{
// 				create:function(){
// 					bus.$emit('create',{name:this.name});
// 					this.name = '';
// 				}
// 			}
// 		},
// 		'compB':{
// 			template:"<div>"
// 		}
// 	}
// });





// var vm = new Vue({
// 	el:"#app",
// 	data:{
// 		currentView:'home'
// 	},
// 	components:{
// 		home:{
// 			template:"<div>\
// 					 	<p>Home</p>\
// 					 		<ul>\
// 					 			<li v-for='item in items'>{{item}}</li>\
// 					 		<ul>\
// 					 </div>",
// 			data:function(){
// 				return {
// 					items:[]
// 				}
// 			},
// 			ready:function(){
// 				console.log('fetch data');
// 				this.items = [1, 2, 3, 4, 5];
// 			}
// 		},
// 		list:{
// 			template:"<div>List</div>"
// 		},
// 		detail:{
// 			template:"<div>Detail</div>"
// 		}
// 	}
// });

// var child = Vue.extend({
// 	template:"<div style='border:solid 1px red;'>\
// 				 <slot></slot>\
// 			 	 <p>这是子组件标题</p>\
// 			 	 <slot></slot>\
// 			  </div>"
// });

// var parent = Vue.extend({
// 	template:"<div>\
// 				 <p>这是父组件标题</p>\
// 				 <child>111<p>这是一些初始内容</p><p>这是更多的初始内容</p></child>\
// 			  </div>",
// 	components:{
// 		'child':child
// 	}	
// });

// Vue.component('parent', parent);

// var vm = new Vue({
// 	el:"#app"
// });


// Vue.component('my-slot', {
// 	template:"<div>\
// 				 <div class='tile' style='border:solid 1px red;'>\
// 				 	<slot name='title'></slot>\
// 				 </div>\
// 				 <div class='content' style='border:solid 1px green;'>\
// 				 	<slot name='content'></slot>\
// 				 </div>\
// 			 <div>"
// });

// var vm = new Vue({
// 	el:"#app",
// 	data:{
// 		title:"This is a title",
// 		content:"This is the content",
// 		childData:'childData'
// 	}
// });


// var granddaughter = Vue.extend({
// 	template:"<button v-on:click='fire'>Fire add event from granddaughter</button><div style='border:solid 1px #000'>This is granddaughter, the daughter of my daughter</div>",
// 	methods:{
// 		fire:function(){
// 			console.log(this.$root);

// 			//console.log(this.$children);
// 			console.log(this.$parent);
// 		}
// 	}
// });

// var daughter = Vue.extend({
// 	template:"<button v-on:click='fire'>Fire add event on daughter</button><div style='border:solid 1px green;'>I am the daughter of parent, and this is my daughter:<grand-daughter></grand-daughter></div>",
// 	components:{
// 		'grand-daughter':granddaughter
// 	},
// 	methods:{
// 		fire:function(){
// 			console.log(this.$root);
// 			console.log(this.$children);
// 			console.log(this.$parent);
// 		}
// 	}
// });

// var son = Vue.extend({
// 	template:"<div style='border:solid 1px red;'>I am a son, this message is from parent component:{{parentMsg}}</div>",
// 	props:['parentMsg']
// });

// var parent = Vue.extend({
// 	template:"<button v-on:click='fire'>Fire add event on parent</button><div>I am parent {{name}}, this is my child:<my-son v-ref:theFirstChild parent-msg='info from parent'></my-son> and this is my daughter:<my-daughter v-ref:theSecondChild></my-daughter></div>",
// 	data:function(){
// 		return {
// 			name:'Jag'																										
// 		}
// 	},
// 	components:{
// 		'my-son':son,
// 		'my-daughter':daughter
// 	},
// 	methods:{
// 		fire:function(){
// 			var a = this.$refs.theFirstChild;
// 			var b = this.$refs.theSecondChild
// 			// console.log(this.$refs.theFirstChild);
// 			// console.log(this.$refs.theSecondChild);
// 			console.log(a);
// 			console.log(b);
// 			console.log(this.$refs);
// 		}
// 	}
// });

// Vue.component('parent', parent);

// var vm = new Vue({
// 	el:"#app",
// 	data:{
// 		outname:"Outter!"
// 	}
// });






// var granddaughter = Vue.extend({
// 	template:"<button v-on:click='fireNotDispatch'>fire not dispatch</button><button v-on:click='fire'>Fire add event from granddaughter</button><div style='border:solid 1px #000'>This is granddaughter, the daughter of my daughter</div>",
// 	methods:{
// 		fire:function(){
// 			this.$dispatch('add', 'greeting from granddaughter');
// 		},
// 		fireNotDispatch:function(){
// 			this.$emit('add', 'hello from granddaughter');
// 		}
// 	},
// 	events:{
// 		add:function(msg){
// 			alert(msg + ' in granddaughter');
// 		}
// 	}
// });

// var daughter = Vue.extend({
// 	template:"<button v-on:click='fire'>Fire add event on daughter</button><div style='border:solid 1px green;'>I am the daughter of parent, and this is my daughter:<grand-daughter></grand-daughter></div>",
// 	components:{
// 		'grand-daughter':granddaughter
// 	},
// 	events:{
// 		add:function(msg){
// 			alert(msg + ' in daughter');
// 			return true;
// 		}
// 	},
// 	methods:{
// 		fire:function(){
// 			this.$emit('add', 'daughter speaks');
// 		}
// 	}
// });

// var son = Vue.extend({
// 	template:"<div style='border:solid 1px red;'>I am a son, this message is from parent component:{{parentMsg}}</div>",
// 	props:['parentMsg']
// });

// var parent = Vue.extend({
// 	template:"<button v-on:click='broadcastAddEvent'>broadcast add event</button><button v-on:click='fire'>Fire add event on parent</button><div>I am parent {{name}}, this is my child:<my-son parent-msg='info from parent'></my-son> and this is my daughter:<my-daughter></my-daughter></div>",
// 	data:function(){
// 		return {
// 			name:'Jag'
// 		}
// 	},
// 	components:{
// 		'my-son':son,
// 		'my-daughter':daughter
// 	},
// 	events:{
// 		'add':function(msg){
// 			alert(msg + ' in parent');
// 		}
// 	},
// 	methods:{
// 		fire:function(){
// 			this.$emit('add', 'parent speaks');
// 		},
// 		broadcastAddEvent:function(){
// 			this.$broadcast('add', 'broadcast from parents');
// 		}
// 	}


// });

// Vue.component('parent', parent);

// var vm = new Vue({
// 	el:"#app",
// 	data:{
// 		outname:"Outter!"
// 	}
// });





















// var vm = new Vue({
// 	el:"#app",
// 	data:{
// 		todo:[]
// 	},
// 	methods:{
// 		triggerCustomerEvent:function(){
// 			this.$emit('add', 'There are lots of fools around here');
// 		}
// 	},
// 	events:{
// 		'add':function(msg){
// 			this.todo.push(msg);
// 		}
// 	}
// });




// Vue.component('di', {
// 	template:'<div>This is Dxc, {{msg}}</div>',
// 	props:['msg']
// });

// var vm = new Vue({
// 	el:'#app',
// 	data:{
// 		name:'Terry'
// 	}
// });

// var myComponent = Vue.extend({
// 	//props:['message'],
// 	props:{
// 		message:{
// 			type:String,
// 			required:true
// 		}
// 	},

// 	// template:"<p>{{'From parent:' + message}}</p>"
// 	template:"<div>Child component:<input type='text' v-model='message' /></div>"
// });

// Vue.component('my-component', myComponent);

// var vm = new Vue({
// 	el:"#app",
// 	data:{
// 		msg:''
// 	}
// });



// var Child = Vue.extend({
// 	template:"<p>I am a child</p>"
// });

// var Parent = Vue.extend({
// 	template:"<p>I am parent and this is my:<my-child></my-child></p>",
// 	components:{
// 		'my-child':Child
// 	}
// });

// new Vue({
// 	el:"#app",
// 	components:{
// 		 'didi':Parent,
// 		 'nini':Child
// 	}
// });

// var tpl = Vue.extend({
// 	template:"<div>This is my tpl, and this is my {{name}}</div>"
// });

// Vue.component('tpl', tpl);

// var vm = new Vue({
// 	el:'#app',
// 	data:{
// 		name:'jog'
// 	}
// });


// Vue.component('com', {
// 	template:"<div>哈哈哈</div>"
// });

// Vue.component('Sis',{
// 	template:"<div>Djago</div><div>And:</div><my-child></my-child>",
// 	components:{
// 		"my-child":{
// 			template:"This is my child"
// 		}
// 	}
// });

// var vm = new Vue({
// 	el:"#app"
// });

// var child = Vue.extend({
// 	template:"<div>This is a child</div>"
// });

// var myComponent = Vue.extend({
// 	template:"<div>This is a component</div><div>And this is my child:</div><my-child></my-child>",
// 	components:{
// 		'my-child':child
// 	}
// });

// Vue.component("my", myComponent);
// Vue.component('my-child', child);

// var vm = new Vue({
// 	el:"#app"
// });


// var myComponent = Vue.extend({
// 	template:"<div>This is some tpl!!!</div>"
// });

// Vue.component('my-component', myComponent);

// var vm = new Vue({
// 	el:'#tpl',
// 	components:{
// 		'my-component':myComponent
// 	}
// });


// var Child = Vue.extend({
// 	template:"<div>This is a child component</div>"
// });

// var myComponent = Vue.extend({
// 	template:'<div>This is some component<my-child></my-child></div>',
// 	components:{
// 		'my-child':Child
// 	}
// });

// Vue.component('my-component', myComponent);
// Vue.component('my-child', Child);


// var vm = new Vue({
// 	el:'#tpl'
// });

// var store = new Vuex.Store({
// 	state:{
// 		count:0
// 	},
// 	mutations:{
// 		increment:function(state){
// 			state.count++
// 		}
// 	}
// });

// const Counter = {
// 	template:"<div>{{count}}</div>",
// 	compuated:{
// 		count(){
// 			return store.state.count;
// 		}
// 	}
// }

// new Vue({
// 	el:'#vuex'
// });



// console.log(store.state.count);

// var vm = new Vue({
// 	el:'#app',
// 	methods:{
// 		say:function(){
// 			alert(this.gender);
// 		},
// 		sayFrom:function(f){
// 			alert(f);
// 		},
// 		showEvent:function(e){
// 			alert(e.target);
// 		},
// 		showEvent2:function(e){
// 			alert(e.target);
// 		}
// 	},
// 	data:{
// 		message:'',
// 		gender:'female',
// 		checked:'',
// 		multiChecked:[],
// 		selected:'',
// 		multiSelected:[],
// 		a:'checked',
// 		b:'checked',
// 		query:"my query",
// 		q:"1",
// 		href:'http://www.163.com',
// 		classA:'class-a',
// 		classB:'class-b',
// 		ac:true,
// 		myStyle:{
// 			// color:'red',
// 			// fontSize:'50px',
// 			// fontWeight:'bolder',
// 			// border:'solid 1px red'
// 		},
// 		isShow:true,
// 		yes:true,
// 		inner:false,
// 		items:[
// 			{title:'title1', 'description':'description1'},
// 			{title:'title2', 'description':'description2'},
// 			{title:'title3', 'description':'description3'},
// 			{title:'title4', 'description':'description4'}
// 		],

// 		objItems:{
// 			city:'镇江',
// 			name:'Terry',
// 			age:'12'
// 		},
// 		temYes:true,

// 		temItems:[{name:'terry', des:'developer'},{name:'sig', des:'developer2'}]

// 	}
// });


// var Child = Vue.extend({
// 	template:"<div>I am a child</div>"
// });

// Vue.component('Child', Child);

// var Parent = Vue.extend({
// 	template:"<div>I am a parent, and this is my <Child></Child></div>"
// });

// Vue.component('Parent', Parent);

// new Vue({
// 	el:"#app"
// });


// var myComponent = Vue.extend({
// 	template:"<div>This is my first component</div>"
// });

// Vue.component('my-component', myComponent);

// new Vue({
// 	el:"#app"
// });




