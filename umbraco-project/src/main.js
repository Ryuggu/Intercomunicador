import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem('user') // grab user data from local storage
    if (userString) { // check to see if there is indeed a user
      const userData = JSON.parse(userString) // parse user data into JSON
      this.$store.commit('SET_USER_DATA', userData) // restore user data with Vuex
    }

    axios.interceptors.response.use(
      response => response, // simply return the response 
      error => {
        if (error.response.status === 401) { // if we catch a 401 error
          this.$store.dispatch('logout') // force a log out 
        }
        return Promise.reject(error) // reject the Promise, with the error as the reason
      }
    )
  },
  render: h => h(App)
}).$mount('#app')


/*CSS*/
import "@/assets/css/main.css";

import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";
Vue.component("Datetime", Datetime);

Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    var vm = vnode.context;
    var callback = binding.value;

    el.clickOutsideEvent = function (home) {
      if (!(el == home.target || el.contains(home.target))) {
        return callback.call(vm, home);
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
  created() {
    const userString = localStorage.getItem('user') // grab user data from local storage
    if (userString) { // check to see if there is indeed a user
      const userData = JSON.parse(userString) // parse user data into JSON
      this.$store.commit('SET_USER_DATA', userData) // restore user data with Vuex
    }

    axios.interceptors.response.use(
      response => response, // simply return the response 
      error => {
        if (error.response.status === 401) { // if we catch a 401 error
          this.$store.dispatch('logout') // force a log out 
        }
        return Promise.reject(error) // reject the Promise, with the error as the reason
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
