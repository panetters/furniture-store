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
    addToCart({ commit, state }, product) {
      const curInd = state.cart.findIndex(obj => obj.id === product.product_id);
      if (curInd === -1) { commit('updateCart', product); }
      else {
        commit('updateQty', { index: curInd, qty: product.quantity });
      }
    }
  },
  
  mutations: {
    updateCart(s, product) {
      s.cart.push({
        id: product.product_id,
        model: product.model,
        quantity: product.quantity,
        price: product.price,
        color: product.color,
        imageURL: product.image_url
      });
    },

    updateQty(s, { index, qty }) {
      s.cart[index].quantity += qty;
    }
  }
});

