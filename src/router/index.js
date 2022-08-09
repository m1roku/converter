import { createRouter, createWebHistory } from 'vue-router'
import CurrenciesPage from '../views/CurrenciesPage.vue'
import ConverterPage from '../views/ConverterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Index',
      path: '/',
      component: CurrenciesPage
    },
    {
      name: 'Converter',
      path: '/converter',
      component: ConverterPage
    }
  ]
})

export default router
