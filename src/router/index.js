import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Phalaenopsis from '../views/phalaenopsis.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/phalaenopsis', component: Phalaenopsis },
  ],
})
