import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: "/welcome",
    children: [{
      path: '/welcome',
      name: 'welcome',
      component: () => import('../views/Home'),
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
