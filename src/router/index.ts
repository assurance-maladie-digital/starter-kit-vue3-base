import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TokensView from '../views/TokensView.vue'
import MaintenanceView from '../views/MaintenanceView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import DatePicker from '../views/DatePicker.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tokens',
      name: 'tokens',
      component: TokensView
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: MaintenanceView
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/date-picker',
      name: 'date-picker',
      component: DatePicker
    }
  ]
})

export default router
