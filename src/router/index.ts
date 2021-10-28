import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import Profile from "../views/Profile.vue";
import SmileCheckBox from "../views/SmileCheckBox.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/SmileCheckBox",
    name: "SmileCheckBox",
    component: SmileCheckBox,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
