import Vue from 'vue';
import App from './App.vue';
import router from './utils/app.router.js';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
