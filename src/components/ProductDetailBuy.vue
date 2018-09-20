<template>
  <b-col class="flex-column">
    <div class="product-ID">Model Number: {{ selected }}</div>
    <b-form-group label="Colors:">
      <b-form-radio-group class="radio" size="sm" buttons button-variant="outline-primary" v-model="selected">
        <b-form-radio v-for="version in details" :key="version.product_id" :value="version.product_id"
          @click.native="chooseVersion(version.stock, version.image_url, version.product_id)">
          {{ version.color }}
        </b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <div class="product-quantity">
      Quantity: 
      <b-form-input type="number" v-model="quantity" value="1" min="1" :max="stock" class="quantity-input"></b-form-input>
    </div>
    <div class="stock">Stock: {{ stock }}</div>
    <b-button size="lg" variant="outline-success" v-on:click="addProductToCart">Add to Cart!</b-button>
    <b-alert class="alert" variant="primary" dismissible :show="alertQuantity" @dismissed="alertQuantity=false">
      Please enter a quantity!
    </b-alert>
    <b-alert class="alert" variant="primary" dismissible :show="alertStock" @dismissed="alertStock=false">
      Not enough stock!
    </b-alert>
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
      quantity: 1,
      stock: '',
      alertQuantity: false,
      alertStock: false
    }
  },

  methods: {
    ...mapActions(['addToCart']),

    chooseVersion(stock, url, id) {
      this.stock = stock;
      this.updateSelection(url, id);
    },

    addProductToCart() {
      if (parseInt(this.quantity) < 1) {
        this.alertQuantity = true;
      } else if (parseInt(this.quantity) > parseInt(this.stock)) {
        this.alertStock = true;
      } else {
        const newProd = this.details.find(obj => obj.product_id === this.selected);
        newProd.quantity = parseInt(this.quantity);
        this.addToCart(newProd);
      }
    }
  },

  mounted() {
    this.selected = this.details[0].product_id;
    this.stock = this.details[0].stock;
  }
}
</script>

<style scoped>
.flex-column {
  text-align: center;
}

.radio {
  font-size: 5px;
}

.product-ID {
  font-size: calc(10px + 1vw);
  margin: 2vh;
}

.product-quantity {
  margin: 2vh;
  margin-bottom: 0;
}

.stock {
  margin-bottom: 2vh;
}

.quantity-input {
  display: inline-block;
  width: 65px;
}

.alert {
  width: 40%;
  margin: auto;
  margin-top: 1vh;
}
</style>
