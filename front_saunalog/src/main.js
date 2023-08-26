import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/main',
    component: () => import('./components/MainPage.vue')
  },
  {
    path: '/UserLogin',
    component: () => import('./components/UserLogin.vue')
  },
  {
    path: '/*',
    redirect: '/main',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

