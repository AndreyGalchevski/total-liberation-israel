import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Navbar from './components/Navbar'
import Events from './components/Events'
import Articles from './components/Articles'
import Contact from './components/Contact'
import ManageEvents from './components/ManageEvents'
import EditEvent from './components/EditEvent'
import NewEvent from './components/NewEvent'
import Admin from './components/Admin'
import { store } from './store/index'
import { sync } from 'vuex-router-sync'

export function createApp () {
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App),
    components: {
      App,
      Navbar,
      Events,
      Articles,
      Contact,
      ManageEvents,
      EditEvent,
      NewEvent,
      Admin
    }
  })
  return { app, router, store }
}
