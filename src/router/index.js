import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutView from '../views/AboutView.vue'
import Login from '@/views/Login.vue'
import Events from '@/views/Events.vue'
import EventDetail from '@/views/EventDetail.vue'
import SignUp from '@/views/Sign-up.vue'
import Discover from '@/views/Discover.vue'
import OrgDetail from '@/views/OrgDetail.vue'

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
    path: '/login',
    name: 'Login',
    component: Login
    // accepts tokens
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: EventDetail
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/organizers/:username',
    name: 'Organizer-Detail',
    component: OrgDetail
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