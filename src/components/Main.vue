<template>
  <div id="main">
    <div v-on:click="goHome">Home</div>
    <div class="cart-header">Furniture:</div>
    <table class="ctable">
      <tr>
        <th>Model</th>
        <th>Color</th> 
        <th>Price</th>
      </tr>
      <tr v-for="item in furniture" :key="item.product_id">
        <td>{{ item.model }}</td>
        <td>{{ item.color }}</td> 
        <td>{{ item.price }}</td>
        <td><span class="green" v-on:click="addToCart(item.product_id)">Add to Cart</span></td>
      </tr>
    </table>
    <div class="cart-header">Cart:</div>
    <table class="ctable">
      <tr>
        <th>Model</th>
        <th>Color</th> 
        <th>Price</th>
      </tr>
      <tr v-for="item in cart" :key="item.product_id + 1">
        <td>{{ item.model }}</td>
        <td>{{ item.color }}</td> 
        <td>{{ item.price }}</td>
        <td><span class="red" v-on:click="removeFromCart(item.product_id)">Remove from Cart</span></td>
      </tr>
    </table>
    <div class="checkout">
      <div class="total">Subtotal: ${{ sum }}</div>
      <b-button size="lg" variant="success">Checkout!</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Main',

  data() {
    return {
      furniture: [],
      cart: [],
      sum: 0
    }
  },

  methods: {
    addToCart(id) {
      this.cart.push(this.furniture.find(item => item.product_id === id));
    },

    removeFromCart(id) {
      let ind = this.cart.findIndex(item => item.product_id === id);
      this.cart.splice(ind, 1);
    },

    goHome() {
      this.$router.push({ path: '/' });
    }
  },

  mounted() {
    axios.get('/api/slides')
      .then(res => {
        this.furniture = res.data;
      })
  },

  watch: {
    cart() {
      this.sum = this.cart.reduce((c, v) => c + parseInt(v.price.slice(1)), 0);
    }
  }
}
</script>

<style scoped>
#main {
  font-family:'Courier New', Courier, monospace;
}

.cart-header {
  font-weight: bold;
  font-size: calc(10px + 1vw);
  margin: 10px;
}

.ctable {
  margin: 10px;
  width: 100%;
}

td {
  width: 25%;
}

.checkout {
  text-align: center;
}

.total {
  font-size: calc(10px + 1vw);
  margin: 10px;
}

.green {
  color: green;
}

.red {
  color: red;
}
</style>
