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
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" @keyup.enter.native="search"
            v-model="searchQuery" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" v-on:click="search">Search</b-button>
        </b-nav-form>
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
      categories: [],
      searchQuery: ''
    };
  },

  methods: {
    catSelect(cat) {
      this.$router.push({ path: `/category/${cat}` });
    },

    search() {
      const tempQuery = this.searchQuery;
      this.searchQuery = '';
      this.$router.push({ path: `/search/${tempQuery}` });
    }
  },

  mounted() {
    axios.get('/api/categories')
      .then(res => {
        this.categories = res.data;
      });
  }
}
</script>

<style scoped>

</style>
