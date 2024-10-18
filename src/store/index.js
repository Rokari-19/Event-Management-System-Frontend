import { createStore } from 'vuex'

export default createStore({
  state: {
    calender :{
      events :[]
    },
    token: "",
    isAuth: false
  },
  getters: {
  },
  mutations: {
    // initialize local storage in browser
    initializeStore(state) {
      // token logic
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuth = true
      } else {
        state.token = ''
        state.isAuth = false
      }
    },

    // getting, setting and removing tokens
    setToken(state, token) {
      state.token = token
      state.isAuth = true
      localStorage.setItem('token', token)
    },

    removeToken(state, token) {
      state.token = ''
      state.isAuth = false
      localStorage.removeItem('token', token)
    }
  },
  actions: {},
  modules: {}
})


// todo
/*
set up welcome component - check
set up event detail component
set up sign up page
set up calender page
set up account page
set up log out functionality
set up discover page
set up about page
set up privacy policy
set up pricing
 */