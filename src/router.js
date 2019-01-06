import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from './components/Home'
import Events from './components/Events'
import Articles from './components/Articles'
import Contact from './components/Contact'
import ManageEvents from './components/ManageEvents'
import EditEvent from './components/EditEvent'
import ManageArticles from './components/ManageArticles'
import EditArticle from './components/EditArticle'
import ManageInvestigations from './components/ManageInvestigations'
import EditInvestigation from './components/EditInvestigation'
import Article from './components/Article'
import Login from './components/Login'
import Admin from './components/Admin'
import About from './components/About'
import Investigations from './components/Investigations'
import PageNotFound from './components/PageNotFound'
import store from './store'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/events',
			name: 'Events',
			component: Events
		},
		{
			path: '/articles',
			name: 'Acticles',
			component: Articles
		},
		{
			path: '/article/:id',
			name: 'Acticle',
			component: Article
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/investigations',
			name: 'Investigations',
			component: Investigations
		},
		{
			path: '/admin',
			name: 'Admin',
			component: Admin,
			beforeEnter: (to, from, next) => {
				if (store.getters.isLoggedIn) {
					next()
				} else {
					next({ name: 'Login' })
				}
			},
			children: [
				{
					path: 'events',
					name: 'ManageEvents',
					component: ManageEvents
				},
				{
					path: 'events/new',
					name: 'NewEvent',
					props: { isNew: true },
					component: EditEvent
				},
				{
					path: 'events/:id',
					name: 'EditEvent',
					props: { isNew: false },
					component: EditEvent
				},
				{
					path: 'articles',
					name: 'ManageArticles',
					component: ManageArticles
				},
				{
					path: 'articles/new',
					name: 'NewArticle',
					props: { isNew: true },
					component: EditArticle
				},
				{
					path: 'articles/:id',
					name: 'EditArticle',
					props: { isNew: false },
					component: EditArticle
				},
				{
					path: 'investigations',
					name: 'ManageInvestigations',
					component: ManageInvestigations
				},
				{
					path: 'investigations/new',
					name: 'NewInvestigation',
					props: { isNew: true },
					component: EditInvestigation
				},
				{
					path: 'investigations/:id',
					name: 'EditInvestigation',
					props: { isNew: false },
					component: EditInvestigation
				}
			]
		},
		{
			path: '/login/',
			name: 'Login',
			component: Login
		},
		{
			path: '*',
			name: 'PageNotFound',
			component: PageNotFound
		}
	]
})
