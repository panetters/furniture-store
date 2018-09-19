import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  
  getters: {
    getCart: (s) => s.cart,
    getCartCount: (s) => s.cart.length
  },
  
  actions: {
    addToCart({ commit, state }, product) {
      const curInd = state.cart.findIndex(obj => obj.id === product.product_id);
      if (curInd === -1) { commit('updateCart', product); }
      else {
        commit('updateQty', { index: curInd, qty: product.quantity });
      }
    },

    removeFromCart({ commit }, id) {
        commit('removeCart', id);
    },

    cartQtyChange({ commit, state }, newInfo) {
      const curInd = state.cart.findIndex(obj => obj.id === newInfo.id);
      commit('changeQty', { index: curInd, qty: newInfo.quantity });
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
    },

    removeCart(s, id) {
      s.cart = s.cart.filter(prod => prod.id !== id);
    },

    changeQty(s, { index, qty }) {
      s.cart[index].quantity = qty;
    }
  }
});

