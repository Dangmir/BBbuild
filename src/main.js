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


const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/projects/:id', component: ProjectView },
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
