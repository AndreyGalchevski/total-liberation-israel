import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '../services/AuthService'

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('token')
  },
  actions: {
    async login ({ commit }, creds) {
      try {
        commit(LOGIN) // show spinner
        const response = await AuthService.authenticateUser(creds)
        if (response.data.success) {
          localStorage.setItem('token', response.data.token)
          commit(LOGIN_SUCCESS)
        }
      } catch (e) {
        console.log(`Error while logging in. ${e}`)
      }
    },
    logout ({ commit }) {
      localStorage.removeItem('token')
      commit(LOGOUT)
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
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  }
})
