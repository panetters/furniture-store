const state = {
  cart: []
};

const getters = {
  getCart: (s) => s.cart
};

const actions = {
  addToCart({ commit }, product, qty) {
    commit('updateCart', product, qty);
  },
};

const mutations = {
  updateCart(s, product, qty) {
    let newProduct = product;
    newProduct.quantity = qty;
    s.cart.push(newProduct);
  },
};


export default {
  state,
  getters,
  actions,
  mutations,
};
