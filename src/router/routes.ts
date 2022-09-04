import modules from "@/modules";
import { AboutView, HomeView } from "@/views";
import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    component: HomeView,
    children: [modules.introduction.routes],
  },
  { path: "/about", component: AboutView },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
