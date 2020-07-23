import Vue from 'vue'
import Router from 'vue-router';
import Home from '../pages/Home'
import Members from '../pages/Members'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/members',
			name: 'Members',
			component: Members
		}
	],
	mode: 'history'
})