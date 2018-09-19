<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-left">
        <b-nav-item-dropdown text="Categories">
          <b-dropdown-item v-for="category in categories" :key="category" v-on:click="catSelect(category)">
            {{ category }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
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

  methods: {
    catSelect(cat) {
      this.$router.push({ path: `spreetail/category/${cat}` });
    }
  },

  mounted() {
    axios.get('spreetail/api/categories')
      .then(res => {
        this.categories = res.data;
      });
  }
}
</script>

<style scoped>

</style>
