import { createRouter, createWebHistory } from "vue-router";
import BaseView from "@/views/BaseView.vue";
import CreateView from "@/views/CreateView.vue";
import SettingsView from "../views/SettingsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: BaseView,
    },
    {
      path: "/create",
      name: "create",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/CreateView.vue"),
      component: CreateView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
      // component: () => import("../views/SettingsView.vue"),
    },
  ],
});

export default router;
