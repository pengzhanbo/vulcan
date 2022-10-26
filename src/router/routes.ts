import type { RouteRecordRaw } from 'vue-router'
import Home from '~/pages/Home.vue'
export const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: async () => await import('~/pages/About.vue'),
  },
] as RouteRecordRaw[]
