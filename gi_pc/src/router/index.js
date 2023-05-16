import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
