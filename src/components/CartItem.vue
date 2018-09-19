<template>
  <li class="cart-item">
    <img :src="product.imageURL" class="product-image" />
    <div class="value">{{ product.model }}, {{ product.color }}</div>
    <div class="value quantity-container">
      <b-form-input type="number" v-model="quantity" :value="product.quantity"
        min="1" class="product-quantity"></b-form-input>
    </div>
    <div class="value">{{ product.price }}</div>
    <div class="cart-button" v-on:click="removeFromCart(product.id)">Remove</div>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CartItem',
  
  props: ['product'],

  data() {
    return {
      quantity: ''
    }
  },

  methods: {
    ...mapActions(['cartQtyChange', 'removeFromCart'])
  },

  watch: {
    quantity() {
      this.cartQtyChange({ id: this.product.id, quantity: parseInt(this.quantity) });
    }
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
  width: 48px;
}

.value {
  width: 25%;
}

.quantity-container {
  text-align: center;
}

.product-quantity {
  width: 65px;
  margin: auto;
}

.cart-button:hover {
  cursor: pointer;
}
</style>
