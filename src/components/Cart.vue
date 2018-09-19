<template>
  <ul class="cart-list">
    <CartItem class="cart-item" v-for="product in getCart" :product="product" :key="product.id" />
  </ul>
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
      quantity: '1'
    }
  },

  computed: {
    ...mapGetters(['getCart'])
  }
}
</script>

<style scoped>
.cart-list {
  list-style: none;
}
</style>
