import {createApp} from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

import './index.css'
import ProjectView from "@/views/ProjectView.vue";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFJnZtphQPQk7SS2y_D8OoO7X7GXv0Q64",
    authDomain: "buildmp-86834.firebaseapp.com",
    projectId: "buildmp-86834",
    storageBucket: "buildmp-86834.appspot.com",
    messagingSenderId: "610839018897",
    appId: "1:610839018897:web:49e378dac01211dca9ee30",
    measurementId: "G-KYRCH0LZ7D"
};

initializeApp(firebaseConfig);

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/projects/:id', component: ProjectView },
    {path:'/register',component: Register},
    {path:'/login',component: Login},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,

})
export default router
const app = createApp(App)
app.use(PrimeVue)
app.component("DataTable",DataTable)
app.component("Column",Column)
app.component("ColumnGroup",ColumnGroup)
app.component("Row",Row)
app.use(router)
app.mount('#app')
