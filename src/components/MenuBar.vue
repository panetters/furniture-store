<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-nav class="ml-left">
      <b-nav-item-dropdown text="Categories">
        <b-dropdown-item v-for="category in categories" :key="category" href="#">
          {{ category }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MenuBar',

  data() {
    return {
      categories: []
    };
  },

  mounted() {
    axios.get('/api/categories')
      .then(res => {
        console.log(res.data);
        this.categories = res.data;
      })
  }
}
</script>

<style scoped>

</style>
