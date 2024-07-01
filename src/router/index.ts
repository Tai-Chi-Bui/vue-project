import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/basic-sfc',
      name: 'basic sfc',
      component: () => import('../views/fundamental/BasicSFC.vue')
    },
    {
      path: '/directives',
      name: 'Directives',
      component: () => import('../views/fundamental/Directives.vue')
    },
    {
      path: '/api-styles',
      name: 'API Styles',
      component: () => import('../views/fundamental/ApiStyles.vue')
    },
    {
      path: '/options-api',
      name: 'Options API',
      component: () => import('../views/fundamental/OptionsApi.vue')
    },
    {
      path: '/composition-api',
      name: 'Composition API',
      component: () => import('../views/fundamental/CompositionApi.vue')
    },
  ]
})

export default router
