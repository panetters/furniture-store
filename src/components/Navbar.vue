<template>
  <b-navbar sticky type="dark" variant="primary">
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
.svg-container {
  display: inline-block;
  width: calc(20px + .5vw);
}
</style>
