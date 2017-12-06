import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Events from '@/components/Events'
import Articles from '@/components/Articles'
import Walls from '@/components/Walls'
import ManageEvents from '@/components/ManageEvents'
import NewEvent from '@/components/NewEvent'
import EditEvent from '@/components/EditEvent'
import ManageArticles from '@/components/ManageArticles'
import NewArticle from '@/components/NewArticle'
import EditArticle from '@/components/EditArticle'
import Article from '@/components/Article'
import Login from '@/components/Login'

Vue.use(Router)

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
      path: '/glasswalls',
      name: 'Walls',
      component: Walls
    },
    {
      path: '/admin/events',
      name: 'ManageEvents',
      component: ManageEvents
    },
    {
      path: '/admin/events/new',
      name: 'NewEvent',
      component: NewEvent
    },
    {
      path: '/admin/events/:id',
      name: 'EditEvent',
      component: EditEvent
    },
    {
      path: '/admin/articles',
      name: 'ManageArticles',
      component: ManageArticles
    },
    {
      path: '/admin/articles/new',
      name: 'NewArticle',
      component: NewArticle
    },
    {
      path: '/admin/articles/:id',
      name: 'EditArticle',
      component: EditArticle
    },
    {
      path: '/article/:id',
      name: 'Acticle',
      component: Article
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login
    }
  ]
})
