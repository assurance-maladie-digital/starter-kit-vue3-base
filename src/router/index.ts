import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: HomeView,
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        }
    ],
})

export default router
