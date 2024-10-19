import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutView from '../views/AboutView.vue'
import Login from '@/views/Login.vue'
import Events from '@/views/Events.vue'
import EventDetail from '@/views/EventDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/discover',
    name: 'discover',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // accepts tokens
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: EventDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.