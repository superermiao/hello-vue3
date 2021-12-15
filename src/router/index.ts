import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import List from '../views/host/list.vue'
import HostList from '../views/hostGroup/list.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/host'
  },
  {
    path: '/host',
    component: List
  },
  {
    path: '/host/detail',
    name: 'detailHost',
    component: () => import('../views/host/detail.vue')
  },
  {
    path: '/host-group',
    component: HostList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
