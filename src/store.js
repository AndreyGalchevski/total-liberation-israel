import Vue from 'vue'
import Vuex from 'vuex'
import Api from './Api'
import FormData from 'form-data'

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS'
const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS'
const CLEAR_ARTICLES = 'CLEAR_ARTICLES'
const CLEAR_ARTICLE = 'CLEAR_ARTICLE'
const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS'
const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS'
const CLEAR_EVENTS = 'CLEAR_EVENTS'
const CLEAR_EVENT = 'CLEAR_EVENT'
const GET_INVESTIGATION_SUCCESS = 'GET_INVESTIGATION_SUCCESS'
const GET_INVESTIGATIONS_SUCCESS = 'GET_INVESTIGATIONS_SUCCESS'
const CLEAR_INVESTIGATIONS = 'CLEAR_INVESTIGATIONS'
const CLEAR_INVESTIGATION = 'CLEAR_INVESTIGATION'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoggedIn: process.BROWSER_BUILD ? !!window.localStorage.getItem('token') : null,
		article: {
			title: null,
			author: null,
			date: null,
			lead: null,
			content: {
				ops: []
			},
			image: null
		},
		articles: [],
		event: null,
		events: [],
		investigation: null,
		investigations: []
	},
	actions: {
		async login (context, params) {
			try {
				context.commit(LOGIN)
				const response = await Api.post('users/authenticate', params)
				if (response.status === 200) {
					window.localStorage.setItem('token', response.data.token)
					context.commit(LOGIN_SUCCESS)
				}
			} catch (e) {
				throw e
			}
		},
		logout (context) {
			window.localStorage.removeItem('token')
			context.commit(LOGOUT)
		},
		async getArticle (context, articleId) {
			try {
				let response = await Api.get(`articles/${articleId}`)
				if (response.data && response.data._id) {
					context.commit('GET_ARTICLE_SUCCESS', response.data)
				}
			} catch (e) {
				throw e
			}
		},
		async getArticles (context) {
			try {
				let response = await Api.get('articles')
				if (response.data.articles) {
					context.commit('GET_ARTICLES_SUCCESS', response.data.articles)
				}
			} catch (e) {
				throw e
			}
		},
		async addArticle (context, params) {
			try {
				let response = await Api.post('articles', params, { headers: { Authorization: window.localStorage.getItem('token') } })

				if (response.status === 200 && params.image) {
					let articleId = response.data.article._id
					let form = new FormData()
					form.append('articleImg', params.image)
					await Api.patch(`articles/${articleId}/image`, form, { headers: { Authorization: window.localStorage.getItem('token') } })
				}
			} catch (e) {
				throw e
			}
		},
		async updateArticle (context, params) {
			try {
				let response = await Api.put(`articles/${params.id}`, params, { headers: { Authorization: window.localStorage.getItem('token') } })

				if (response.status === 200 && params.newImage) {
					if (response.data.updatedArticle.image) {
						await Api.delete(`articles/${params.id}/image`, { headers: { Authorization: window.localStorage.getItem('token') } })
					}

					let form = new FormData()
					form.append('articleImg', params.newImage)
					await Api.patch(`articles/${params.id}/image`, form, { headers: { Authorization: window.localStorage.getItem('token') } })
				}
			} catch (e) {
				throw e
			}
		},
		async deleteArticle (context, articleId) {
			try {
				await Api.delete(`articles/${articleId}`, { headers: { Authorization: window.localStorage.getItem('token') } })
			} catch (e) {
				throw e
			}
		},
		async getEvent (context, eventId) {
			try {
				let response = await Api.get(`events/${eventId}`, { headers: { Authorization: window.localStorage.getItem('token') } })
				if (response.data && response.data._id) {
					context.commit('GET_EVENT_SUCCESS', response.data)
				}
			} catch (e) {
				throw e
			}
		},
		async getEvents (context) {
			try {
				let response = await Api.get('events')
				if (response.data.events) {
					context.commit('GET_EVENTS_SUCCESS', response.data.events)
				}
			} catch (e) {
				throw e
			}
		},
		async addEvent (context, params) {
			try {
				let response = await Api.post('events', params, { headers: { Authorization: window.localStorage.getItem('token') } })

				if (response.status === 200 && params.image) {
					let eventId = response.data.event._id
					let form = new FormData()
					form.append('eventImg', params.image)
					await Api.patch(`events/${eventId}/image`, form, { headers: { Authorization: window.localStorage.getItem('token') } })
				}
			} catch (e) {
				throw e
			}
		},
		async updateEvent (context, params) {
			try {
				let response = await Api.put(`events/${params.id}`, params, { headers: { Authorization: window.localStorage.getItem('token') } })

				if (response.status === 200 && params.newImage) {
					if (response.data.updatedEvent.image) {
						await Api.delete(`events/${params.id}/image`, { headers: { Authorization: window.localStorage.getItem('token') } })
					}

					let form = new FormData()
					form.append('eventImg', params.newImage)
					await Api.patch(`events/${params.id}/image`, form, { headers: { Authorization: window.localStorage.getItem('token') } })
				}
			} catch (e) {
				throw e
			}
		},
		async deleteEvent (context, eventId) {
			try {
				let response = await Api.delete(`events/${eventId}`, { headers: { Authorization: window.localStorage.getItem('token') } })
				return response
			} catch (e) {
				throw e
			}
		},
		async getInvestigation (context, investigationId) {
			try {
				let response = await Api.get(`investigations/${investigationId}`, { headers: { Authorization: window.localStorage.getItem('token') } })
				if (response.data && response.data._id) {
					context.commit('GET_INVESTIGATION_SUCCESS', response.data)
				}
			} catch (e) {
				throw e
			}
		},
		async getInvestigations (context) {
			try {
				let response = await Api.get('investigations')
				if (response.data.investigations) {
					context.commit('GET_INVESTIGATIONS_SUCCESS', response.data.investigations)
				}
			} catch (e) {
				throw e
			}
		},
		async addInvestigation (context, params) {
			try {
				await Api.post('investigations', params, { headers: { Authorization: window.localStorage.getItem('token') } })
			} catch (e) {
				throw e
			}
		},
		async updateInvestigation (context, params) {
			try {
				await Api.put(`investigations/${params.id}`, params, { headers: { Authorization: window.localStorage.getItem('token') } })
			} catch (e) {
				throw e
			}
		},
		async deleteInvestigation (context, investigationId) {
			try {
				await Api.delete(`investigations/${investigationId}`, { headers: { Authorization: window.localStorage.getItem('token') } })
			} catch (e) {
				throw e
			}
		}
	},
	mutations: {
		[LOGIN] (state) {
			state.pending = true
		},
		[LOGIN_SUCCESS] (state) {
			state.isLoggedIn = true
			state.pending = false
		},
		[LOGOUT] (state) {
			state.isLoggedIn = false
		},
		[GET_ARTICLE_SUCCESS] (state, article) {
			state.article = article
		},
		[GET_ARTICLES_SUCCESS] (state, articles) {
			state.articles = articles
		},
		[CLEAR_ARTICLES] (state) {
			state.articles = []
		},
		[CLEAR_ARTICLE] (state) {
			state.article = {
				title: null,
				auhtor: null,
				date: null,
				lead: null,
				content: {
					ops: []
				},
				image: null
			}
		},
		[GET_EVENT_SUCCESS] (state, event) {
			state.event = event
		},
		[GET_EVENTS_SUCCESS] (state, events) {
			state.events = events
		},
		[CLEAR_EVENTS] (state) {
			state.events = []
		},
		[CLEAR_EVENT] (state) {
			state.event = null
		},
		[GET_INVESTIGATION_SUCCESS] (state, investigation) {
			state.investigation = investigation
		},
		[GET_INVESTIGATIONS_SUCCESS] (state, investigations) {
			state.investigations = investigations
		},
		[CLEAR_INVESTIGATIONS] (state) {
			state.investigations = []
		},
		[CLEAR_INVESTIGATION] (state) {
			state.investigation = null
		}
	},
	getters: {
		isLoggedIn: state => {
			return state.isLoggedIn
		},
		article: state => {
			return state.article
		},
		articles: state => {
			return state.articles
		},
		event: state => {
			return state.event
		},
		events: state => {
			return state.events
		},
		investigation: state => {
			return state.investigation
		},
		investigations: state => {
			return state.investigations
		}
	}
})
