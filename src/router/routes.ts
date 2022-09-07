import modules from "@/modules";
import { AboutView, HomeView } from "@/views";
import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/",
        component: AboutView,
      },
      modules.introduction.routes,
    ],
  },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  const doc = document as Document;
  doc.title = (to.name?.toString() as string) || "GSAP Learning";
  next();
});
