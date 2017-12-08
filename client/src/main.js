// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navbar from './components/Navbar'
import Events from './components/Events'
import Articles from './components/Articles'
import Walls from './components/Walls'
import ManageEvents from './components/ManageEvents'
import EditEvent from './components/EditEvent'
import NewEvent from './components/NewEvent'
import Admin from '@/components/Admin'
import { store } from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
    Navbar,
    Events,
    Articles,
    Walls,
    ManageEvents,
    EditEvent,
    NewEvent,
    Admin
  }
})
