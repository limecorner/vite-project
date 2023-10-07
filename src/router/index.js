import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path:'/',
    name: 'Main',
    component: () => import('@/views/Main.vue'),
  },
  {
    path:'/demoElTable',
    name: 'DemoElTable',
    component: () => import('@/views/DemoElTable.vue'),
  },
  {
    path:'/slot',
    name: 'Slot',
    component: () => import('@/views/Slot.vue'),
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;