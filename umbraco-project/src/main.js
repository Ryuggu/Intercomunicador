import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "font-awesome/css/font-awesome.min.css";

/*CSS*/
import "@/assets/css/main.css";
import '@/assets/style/style.css';

Vue.config.productionTip = false;
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



 
