<template>
  <div id="main">
    <div v-on:click="goHome">Home</div>
    <div class="cart-header">Furniture:</div>
    <ul class="cart-list">
      <li v-for="item in furniture" :key="item.product_id">
        {{ item.model }} {{ item.color }} {{ item.price }} <span class="green" v-on:click="addToCart(item.product_id)">Add to Cart</span>
      </li>
    </ul>
    <div class="cart-header">Cart:</div>
    <ul class="cart-list">
      <li v-for="item in cart" :key="item.product_id">
        {{ item.model }} {{ item.color }} {{ item.price }} <span class="red" v-on:click="removeFromCart(item.product_id)">Remove from Cart</span>
      </li>
    </ul>
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

nav {
  display: none;
}

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

.green {
  color: green;
}

.red {
  color: red;
}
</style>
