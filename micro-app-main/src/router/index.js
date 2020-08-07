import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import("@/layout/BaseLayout.vue"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home.vue")
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard.vue")
      },
      {
        path: "*",
        component: () => import("@/views/Home.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
