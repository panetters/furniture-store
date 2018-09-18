<template>
  <b-navbar sticky type="dark" variant="primary">
    <b-navbar-brand class="logo pointer" v-on:click="goHome">Spreetail</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="#">Cart</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',

  methods: {
    goHome() {
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style scoped>

</style>
