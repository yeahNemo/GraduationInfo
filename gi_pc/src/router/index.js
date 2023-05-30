import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register"),
  },
  {
    path: "/info",
    name: "info",
    component: () => import("../views/InfoCollect"),
  },
  {
    path: "/infoList",
    name: "infoList",
    component: () => import("../views/InfoList"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
