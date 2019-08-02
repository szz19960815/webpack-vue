import Vue from 'vue';
import App from './src/App.vue';
import router from './src/router/index';

new Vue({
  router,
  render: h=>h(App)
}).$mount('#app');