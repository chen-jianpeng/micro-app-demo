import Vue from "vue";
import VueRouter from "vue-router";

import vueMenu from "./modules/vueMenu";
import reactMenu from "./modules/reactMenu";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    component: () => import("@/layout/HeaderContainer"),
    children: [
      {
        path: "",
        components: {
          headbar: () => import("@/layout/components/Headbar"),
          default: () => import("@/views/Dashboard")
        }
      }
    ]
  },
  {
    path: "/vue",
    component: () => import("@/layout/HeaderContainerAside"),
    children: [
      {
        path: ":microApp*",
        props: { sidebar: vueMenu },
        components: {
          headbar: () => import("@/layout/components/Headbar"),
          sidebar: () => import("@/layout/components/Sidebar"),
          default: () => import("@/views/Home")
        }
      }
    ]
  },
  {
    path: "/react",
    component: () => import("@/layout/HeaderContainerAside"),
    children: [
      {
        path: ":microApp*",
        props: { sidebar: reactMenu },
        components: {
          headbar: () => import("@/layout/components/Headbar"),
          sidebar: () => import("@/layout/components/Sidebar"),
          default: () => import("@/views/Home")
        }
      }
    ]
  },
  {
    path: "*",
    redirect: "/dashboard"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
