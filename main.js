import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http/http.js'
Vue.prototype.$http = http;
import axios from 'axios'
Vue.prototype.$axios = axios;
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
