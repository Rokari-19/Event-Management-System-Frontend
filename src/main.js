import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Welcome from './components/Welcome.vue'

axios.defaults.baseURL = "http://127.0.0.1:8000"

const app = createApp(App).use(store).use(router, axios)
app.component("Welcome", Welcome)
app.mount('#app')
