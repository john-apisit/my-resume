import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import Profile from "../views/Profile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
