import Vue from 'vue'
import App from './App.vue'

// ghay stuff
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

//

// import createStore from './vuex/store'
// import createRouter from './router'
import { sync } from 'vuex-router-sync'

export function createApp () {
  // const store = createStore()
  // const router = createRouter()
  // 同步路由状态(route state)到 store
  sync(store, router)
  // 创建应用程序实例，将 router 和 store 注入
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
  // 暴露 app, router 和 store。
  return { app, router, store }
}
