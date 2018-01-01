import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Events from '@/components/Events'
import Articles from '@/components/Articles'
import Contact from '@/components/Contact'
import ManageEvents from '@/components/ManageEvents'
import NewEvent from '@/components/NewEvent'
import EditEvent from '@/components/EditEvent'
import ManageArticles from '@/components/ManageArticles'
import NewArticle from '@/components/NewArticle'
import EditArticle from '@/components/EditArticle'
import Article from '@/components/Article'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import About from '@/components/About'
import Investigations from '@/components/Investigations'
import {store} from '@/store'
import Meta from 'vue-meta'

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
          component: NewEvent
        },
        {
          path: 'events/:id',
          name: 'EditEvent',
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
          component: NewArticle
        },
        {
          path: 'articles/:id',
          name: 'EditArticle',
          component: EditArticle
        }
      ]
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login
    }
  ]
})
