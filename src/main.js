import Vue from 'vue'
import App from './App.vue'
import router from './components/router'
import VueRouter from 'vue-router';

Vue.config.productionTip = false



new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
