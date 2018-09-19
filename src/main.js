import Vue from 'vue'
import VueRouter from 'vue-router';
import store from '../store/store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App';
import Splash from './components/Splash';
import Cart from './components/Cart';
import Category from './components/Category';
import ProductDetail from './components/ProductDetail';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: '/', component: Splash },
  { path: '/cart', component: Cart},
  { path: '/category/:catName', component: Category, props: true },
  { path: '/model/:modelName', component: ProductDetail, props: true }
];

const router = new VueRouter({
  routes
});


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
