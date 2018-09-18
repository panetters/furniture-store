import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  
  getters: {
    getCart: (s) => s.cart
  },
  
  actions: {
    addToCart({ commit }, product) {
      commit('updateCart', product);
    },
  },
  
  mutations: {
    updateCart(s, product) {
      const curInd = s.cart.findIndex(prod => prod.product_id === product.product_id);
      if (curInd > -1) {
        s.cart[curInd].quantity += product.quantity; 
      }
      else { s.cart.push(product); }
    }
  }
});

