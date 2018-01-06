import Vue from 'vue'
import Vuex from 'vuex'
import {Api} from './Api'

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

export const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    article: null,
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
        const response = await Api.post('api/authenticate', params)
        if (response.data.success) {
          localStorage.setItem('token', response.data.token)
          context.commit(LOGIN_SUCCESS)
        }
      } catch (e) {
        console.log(`Error while logging in. ${e}`)
      }
    },
    logout (context) {
      localStorage.removeItem('token')
      context.commit(LOGOUT)
    },
    async getArticle (context, articleId) {
      return new Promise(async (resolve, reject) => {
        try {
          let response = await Api.get(`api/article/${articleId}`)
          if (response.data && response.data._id) {
            context.commit('GET_ARTICLE_SUCCESS', response.data)
          }
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async getArticles (context) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.get('api/article')
          if (response.data.articles) {
            context.commit('GET_ARTICLES_SUCCESS', response.data.articles)
          }
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async addArticle (context, params) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.post('api/article', params, { headers: { Authorization: localStorage.getItem('token') } })

          if (response.data.success && params.image) {
            let articleId = response.data.article._id
            let form = new FormData()
            form.append('articleImg', params.image)
            let imageResponse = await Api.patch(`api/article/${articleId}/image`, form, { headers: { Authorization: localStorage.getItem('token') } })
            resolve(imageResponse)
          } else {
            resolve(response)
          }
        } catch (e) {
          reject(e)
        }
      })
    },
    async updateArticle (context, params) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.put(`api/article/${params.id}`, params, { headers: { Authorization: localStorage.getItem('token') } })

          if (response.data.success && params.newImage) {
            let imageDeleteResponse = await Api.delete(`api/article/${params.id}/image`, { headers: { Authorization: localStorage.getItem('token') } })
            resolve(imageDeleteResponse)

            let form = new FormData()
            form.append('articleImg', params.newImage)
            let imageUploadResponse = await Api.patch(`api/article/${params.id}/image`, form, { headers: { Authorization: localStorage.getItem('token') } })
            resolve(imageUploadResponse)
          }
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async deleteArticle (context, articleId) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.delete(`api/article/${articleId}`, { headers: { Authorization: localStorage.getItem('token') } })
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async getEvent (context, eventId) {
      return new Promise(async (resolve, reject) => {
        try {
          let response = await Api.get(`api/event/${eventId}`, { headers: { Authorization: localStorage.getItem('token') } })
          if (response.data && response.data._id) {
            context.commit('GET_EVENT_SUCCESS', response.data)
          }
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async getEvents (context) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.get('api/event')
          if (response.data.events) {
            context.commit('GET_EVENTS_SUCCESS', response.data.events)
          }
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async addEvent (context, params) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.post('api/event', params, { headers: { Authorization: localStorage.getItem('token') } })

          if (response.data.success && params.image) {
            let eventId = response.data.event._id
            let form = new FormData()
            form.append('eventImg', params.image)
            let imageResponse = await Api.patch(`api/event/${eventId}/image`, form, { headers: { Authorization: localStorage.getItem('token') } })
            resolve(imageResponse)
          } else {
            resolve(response)
          }
        } catch (e) {
          reject(e)
        }
      })
    },
    async updateEvent (context, params) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.put(`api/event/${params.id}`, params, { headers: { Authorization: localStorage.getItem('token') } })

          if (response.data.success && params.newImage) {
            let imageDeleteResponse = await Api.delete(`api/event/${params.id}/image`, { headers: { Authorization: localStorage.getItem('token') } })
            resolve(imageDeleteResponse)

            let form = new FormData()
            form.append('eventImg', params.newImage)
            let imageUploadResponse = await Api.patch(`api/event/${params.id}/image`, form, { headers: { Authorization: localStorage.getItem('token') } })
            resolve(imageUploadResponse)
          }
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async deleteEvent (context, eventId) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.delete(`api/event/${eventId}`, { headers: { Authorization: localStorage.getItem('token') } })
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async getInvestigation (context, investigationId) {
      return new Promise(async (resolve, reject) => {
        try {
          let response = await Api.get(`api/investigation/${investigationId}`, { headers: { Authorization: localStorage.getItem('token') } })
          if (response.data && response.data._id) {
            context.commit('GET_INVESTIGATION_SUCCESS', response.data)
          }
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async getInvestigations (context) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.get('api/investigation')
          if (response.data.investigations) {
            context.commit('GET_INVESTIGATIONS_SUCCESS', response.data.investigations)
          }
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async addInvestigation (context, params) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.post('api/investigation', params, { headers: { Authorization: localStorage.getItem('token') } })
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async updateInvestigation (context, params) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.put(`api/investigation/${params.id}`, params, { headers: { Authorization: localStorage.getItem('token') } })
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
    },
    async deleteInvestigation (context, investigationId) {
      return new Promise(async(resolve, reject) => {
        try {
          let response = await Api.delete(`api/investigation/${investigationId}`, { headers: { Authorization: localStorage.getItem('token') } })
          resolve(response)
        } catch (e) {
          reject(e)
        }
      })
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
      state.article = null
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
