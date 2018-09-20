<template>
  <div>
    <div class="cart-header">Your Cart:</div>
    <div v-if="!getCart[0]" class="no-results">Nothing here yet! Get Shopping! 😂</div>
    <div class="flex-container">
      <ul class="cart-list">
        <CartItem class="cart-item" v-for="product in getCart" :product="product" :key="product.id" />
      </ul>
      <div class="checkout">
        <div class="total">Subtotal: ${{ getCartSum }}</div>
        <b-button size="lg" variant="success" v-on:click="checkout">Checkout!</b-button>
        <b-alert class="alert" variant="success" dismissible :show="purchased" @dismissed="purchased=false">
          Treat yo self!
        </b-alert>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

import CartItem from './CartItem';

export default {
  name: 'Cart',

  components: {
    CartItem
  },

  data() {
    return {
      selected: '',
      quantity: '1',
      purchased: false
    }
  },

  computed: {
    ...mapGetters(['getCart', 'getCartSum'])
  },

  methods: {
    ...mapActions(['clearCart']),

    checkout() {
      const curCart = this.getCart;
      if (curCart.length) {
        this.purchased = true;
        curCart.map(item => {
          if (item.quantity > item.stock) item.quantity = item.stock;
          return item;
        });
        axios({
          url: 'api/removeStock',
          method: 'post',
          data: curCart
        });
        this.clearCart();
      }
    }
  }
}
</script>

<style scoped>
.cart-header {
  font-weight: bold;
  font-size: calc(10px + 1vw);
  margin: 10px;
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.cart-list {
  list-style: none;
  width: calc(500px + 40vw);
}

.checkout {
  text-align: center;
}

.total {
  font-size: calc(10px + 1vw);
  margin: 10px;
}

.alert {
  margin: auto;
  margin-top: 1vh;
}

.no-results {
  text-align: center;
  margin-top: 10px;
  font-size: calc(10px + 1.5vw);
}
</style>
