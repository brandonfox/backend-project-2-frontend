import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import PastePage from "@/components/PastePage";
import Home from "@/components/Home";
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(VueRouter);

global.axios = axios;
window.console.log(process.env);
if(process.env.VUE_APP_BACKEND_HOSTNAME !== undefined){
  global.backend = process.env.VUE_APP_BACKEND_HOSTNAME
}
else{
  global.backend = "http://localhost"
}
global.backend += ":";
if(process.env.VUE_APP_BACKEND_PORT !== undefined){
  global.backend += process.env.VUE_APP_BACKEND_PORT;
}else{
  global.backend += "8080"
}
global.backend += "/api";

window.console.log(global.backend);

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