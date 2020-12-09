import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import Home from '../views/Home.vue';
import Rank from '../views/Rank.vue';

Vue.use(VueRouter);
Vue.use(VueMaterial);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/rank/',
		name: 'Rank',
		component: Rank
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
