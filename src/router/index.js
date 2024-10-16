import { createRouter, createWebHistory } from 'vue-router'
import events from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/events',
    name: 'events',
    component: events
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