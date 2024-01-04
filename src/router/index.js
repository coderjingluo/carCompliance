import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/views/HomeView";
const routes = [
  {
    path: "/",
    name: "home",
    component: homeView,
    children: [
      {
        path: "/home",
        name: "homeView",
        component: homeView,
      },
      {
        path: "/cs",
        name: "csStyle",
        component: () => import("@/views/CSStyle"),
      },
      {
        path: "/web",
        name: "webStyle",
        component: () => import("@/views/WebStyle"),
        children: [
          {
            path: "/web/internal-network",
            name: "internalNetwork",
            component: () => import("@/views/testcases/InternalNetwork"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
