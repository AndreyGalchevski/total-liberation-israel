import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

export function createApp () {
	sync(store, router)
	const app = new Vue({
		router,
		store,
		render: h => h(App),
		components: {
			App
		}
	})
	return { app, router, store }
}
