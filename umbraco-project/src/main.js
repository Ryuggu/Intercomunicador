import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import "font-awesome/css/font-awesome.min.css";

/*CSS*/
import "@/assets/css/main.css";



import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
Vue.component("Datetime", Datetime);

Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    var vm = vnode.context;
    var callback = binding.value;

    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        return callback.call(vm, event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  }
});

Vue.config.productionTip = false;
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



 
