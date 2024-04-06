import {createApp} from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import './index.css'


const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
