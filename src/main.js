import Vue from "vue";
import App from "@/App.vue";

import router from "./router";
import store from "./store";

import Buefy from "buefy";

//import "buefy/dist/buefy.css";

import VueMqtt from "vue-mqtt";

/*
const options = {
  username: "admin",
  password: "admin"
};*/

Vue.use(Buefy);

Vue.use(VueMqtt, "ws://127.0.0.1:8883");
//Vue.use(VueMqtt, 'ws://127.0.0.1:8883')//, {clientId: 'WebClient-' + parseInt(Math.random() * 100000)})


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
