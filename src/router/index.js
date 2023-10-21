import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
  },
  {
    path: "/elTable",
    name: "elTable",
    component: () => import("@/views/ElTable.vue"),
  },
  {
    path: "/slot",
    name: "Slot",
    component: () => import("@/views/Slot.vue"),
  },
  {
    path: "/named-slots",
    name: "NamedSlots",
    component: () => import("@/views/NamedSlots.vue"),
  },
  {
    path: "/defineProperty",
    name: "DefineProperty",
    component: () => import("@/views/DefineProperty.vue"),
  },
  {
    path: "/reactivity",
    name: "Reactivity",
    component: () => import("@/views/Reactivity.vue"),
  },
  {
    path: "/props",
    name: "props",
    component: () => import("@/views/Props.vue"),
  },
  {
    path: "/dynamicComponents",
    name: "dynamicComponents",
    component: () => import("@/views/DynamicComponents.vue"),
  },
  {
    path: "/nextTick",
    name: "nextTick",
    component: () => import("@/views/NextTick.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
