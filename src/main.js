import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router';

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
