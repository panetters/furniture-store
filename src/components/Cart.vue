<template>
  <div>
    <div class="cart-header">Your Cart:</div>
    <div class="flex-container">
      <ul class="cart-list">
        <CartItem class="cart-item" v-for="product in getCart" :product="product" :key="product.id" />
      </ul>
      <div class="checkout">
        <div class="total">Subtotal: ${{ getCartSum }}</div>
        <b-button size="lg" variant="success" v-on:click="showAlert=true">Checkout!</b-button>
        <b-alert class="alert" variant="danger" dismissible :show="showAlert" @dismissed="showAlert=false">
          System's Down!<br>Try again later 
        </b-alert>
      </div>
    </div>
  </div>
</template>

<script>
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
      showAlert: false
    }
  },

  computed: {
    ...mapGetters(['getCart', 'getCartSum'])
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
</style>
