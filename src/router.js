import Vue from "vue";
import Router from "vue-router";

//import Home from "./views/Home.vue";

import NotFound from "./views/NotFound.vue";

//import About from "./views/About.vue";
//import BaseLayout from "./layout/BaseLayout.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "home",
      component: () => import('./views/Home.vue')
    },
    {
      path: "/devices",
      name: "devices",
      component: () => import('./views/DevicesList.vue')
    },

    {
      path: "/settings",
      name: "settings",
      component: () => import('./views/AccountSettings.vue')
    },

    {
      path: "/devices/:id",
      name: "device",
      component: () => import('./layout/DeviceLayout.vue'),
      props: true,
      redirect: "/devices/:id/dashboard",
      children: [{
          path: "dashboard",
          name: "dashboard",
          component: () => import('./views/DeviceDashboard.vue')
        },
        {
          path: "settings",
          name: "device-settings",
          component: () => import('./views/DeviceSettings.vue')
        },
        {
          path: "editor",
          name: "device-editor",
          component: () => import('./views/DeviceEditor.vue')
        },
        {
          path: "editor/:ioId",
          name: "io-editor",
          component: () => import('./views/IoEditor.vue'),
          props: true,
        },
      ]
    },
    {
      path: "*",
      name: "page-not-found",
      component: () => import('./views/NotFound.vue'),
    }
  ]
});
