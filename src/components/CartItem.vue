<template>
  <li class="cart-item">
    <img :src="product.imageURL" class="product-image" />
    <div class="value product-model">{{ product.model }}</div>
    <div class="value product-price">{{ product.price }}</div>
    <div class="value product-color">{{ product.color }}</div>
    <div class="value product-quantity">{{ product.quantity }}</div>
    <div class="cart-button" v-on:click="removeFromCart(product.id)">Remove</div>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CartItem',
  
  props: ['product'],

  methods: {
    ...mapActions(['removeFromCart'])
  }
};
</script>

<style scoped>
.cart-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.product-image {
  width: 32px;
}

.value {
  width: 25%;
}

.cart-button:hover {
  cursor: pointer;
}
</style>
