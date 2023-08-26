// import { createApp } from 'vue';
// import router from './router';


// const app = createApp({
//   data: () => ({
//     newItem: '',
//     saunalogs: []
//   }),
//   methods: {
//     //データを表示するメソッド
//     addList: function() {
//       if(this.newItem === '') return
//       let saunalog = {
//         item: this.newItem
//       }
//       this.saunalogs.push(saunalog)
//       this.newItem = ''
//     },
//     //データを削除するメソッド
//     deleteList: function(index) {
//       this.saunalogs.splice(index, 1)
//     }
//   }
// });

// // const router = viewRouter({
// //   mode: 'history',
// //   routes: [
// //     {
// //       path: '/main',
// //       component: () => import('./components/MainPage.vue')
// //     },
// //     {
// //       path: '/login',
// //       component: () => import('./components/login.vue')
// //     },
// //     {
// //       path: '/*',
// //       redirect: '/main',
// //     }
// //   ]
// // })

// app.use(router);
// app.mount('app');

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

