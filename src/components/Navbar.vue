<template>
  <b-navbar sticky type="dark" class="nav-bar">
    <b-navbar-brand class="logo pointer" v-on:click="goHome">Mikea</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item v-on:click="toCart">
        <div class="svg-container"><img src="../assets/shopping-cart.svg"></div>
        {{ getCartCount }}
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',

  methods: {
    goHome() {
      this.$router.push({ path: '/' });
    },

    toCart() {
      this.$router.push({ path: '/cart' });
    }
  },

  computed: {
    ...mapGetters(['getCartCount'])
  }
}
</script>

<style scoped>
.nav-bar {
  background: 
    linear-gradient(135deg, #f47175 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, #f47175 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, #f47175 25%, transparent 25%),
    linear-gradient(45deg, #f47175 25%, transparent 25%);	
  background-size: 20px 30px;
  background-color: #F35B5F;
}

.svg-container {
  display: inline-block;
  width: calc(20px + .5vw);
}
</style>
