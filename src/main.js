import Vue from 'vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App';
import Splash from './components/Splash';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: '/', component: Splash },
];

const router = new VueRouter({
  routes,
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
