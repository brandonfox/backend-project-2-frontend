import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import PastePage from "@/components/PastePage";
import Home from "@/components/Home";
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(VueRouter);

global.axios = axios;
global.backend = "http://127.0.0.1:25801/api";

const router = new VueRouter({
  routes: [
    {path: "/", component: Home},
    {path: "/:id", component: PastePage}
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
