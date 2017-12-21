import Vue from 'vue'
import Vuex from 'vuex'
import {Api} from '@/services/Api'

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS'
const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS'
const CLEAR_ARTICLES = 'CLEAR_ARTICLES'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    article: null,
    articles: []
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
          let response = await Api.get('api/articles')
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
          let response = await Api.post('api/articles', params, { headers: { Authorization: localStorage.getItem('token') } })

          if (response.data.success && params.image) {
            let articleId = response.data.article._id
            let form = new FormData()
            form.append('articleImg', params.image)
            let imageResponse = await Api.patch(`api/articles/${articleId}/image`, form, { headers: { Authorization: localStorage.getItem('token') } })
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
          let response = await Api.put(`api/articles/${params.id}`, params, { headers: { Authorization: localStorage.getItem('token') } })

          if (response.data.success && params.newImage) {
            let imageDeleteResponse = await Api.delete(`api/articles/${params.id}/image`, { headers: { Authorization: localStorage.getItem('token') } })
            resolve(imageDeleteResponse)

            let form = new FormData()
            form.append('articleImg', params.newImage)
            let imageUploadResponse = await Api.patch(`api/articles/${params.id}/image`, form, { headers: { Authorization: localStorage.getItem('token') } })
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
          let response = await Api.delete(`api/articles/${articleId}`, { headers: { Authorization: localStorage.getItem('token') } })
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
    }
  }
})
