import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App';
import Splash from './components/Splash';

Vue.config.productionTip = false;
Vue.use(VueRouter);

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
