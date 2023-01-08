import { createRouter, createWebHistory } from "vue-router";
import Cours from "../views/Cours.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "cours",
      component: Cours,
    },
    {
      path: "/presentation",
      name: "presentation",
      component: () => import("../views/Presentation.vue"),
    },
    {
      path: "/exercices",
      name: "exercices",
      component: () => import("../views/Exercices.vue"),
    },
    {
      path: "/preferences",
      name: "preferences",
      component: () => import("../views/Preferences.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
