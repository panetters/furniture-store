<template>
  <b-col class="flex-column">
    <div class="product-ID">Model Number: {{ selected }}</div>
    <b-form-group label="Colors:">
      <b-form-radio-group buttons button-variant="outline-primary" v-model="selected" name="radioSubComponent">
        <b-form-radio v-for="version in details" :key="version.product_id" :value="version.product_id"
          @click.native="updateSelection(version.image_url, version.product_id)">
          {{ version.color }}
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <div>
      Quantity: <b-form-input type="number" v-model="quantity" value="1" min="1" class="quantity-input"></b-form-input>
    </div>
    <b-button size="lg" variant="outline-success" v-on:click="addProductToCart">Add to Cart!</b-button>
  </b-col>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductDetailBuy',

  props: ['details', 'updateSelection'],

  data() {
    return {
      selected: '',
      quantity: '1'
    }
  },

  methods: {
    ...mapActions(['addToCart']),

    addProductToCart() {
      const newProd = this.details.find(obj => obj.product_id === this.selected);
      newProd.quantity = parseInt(this.quantity);
      this.addToCart(newProd);
    }
  },

  mounted() {
    this.selected = this.details[0].product_id;
  }
}
</script>

<style scoped>
.flex-column {
  text-align: center;
}

.quantity-input {
  display: inline-block;
  width: 65px;
}
</style>
