import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DaniLanding from "../view/DaniLanding.vue";
import Brochure from "../view/Brochure.vue"
import Home from "../view/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: DaniLanding,
  },
  

  {
    path: "/brochure",
    name: "Brochure",
    component: Brochure,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;