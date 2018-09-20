<template>
  <b-navbar toggleable="md" type="dark" class="menu-bar">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-left">
        <b-nav-item-dropdown class="category-drop" text="Categories">
          <b-dropdown-item v-for="category in categories" :key="category" v-on:click="catSelect(category)">
            {{ category }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <div class="form">
          <b-form-input id="search-field" size="sm" class="mr-sm-2" type="text" 
            @keyup.enter.native="search" v-model="searchQuery" placeholder="Search"/>
          <b-button type="submit" size="sm" class="my-2 my-sm-0" v-on:click="search">Search</b-button>
        </div>
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
      document.getElementById('search-field').blur();
      this.$router.push({ path: `/search/${tempQuery}` });
    }
  },

  mounted() {
    axios.get('/api/categories')
      .then(res => {
        this.categories = res.data.sort();
      });
  }
}
</script>

<style scoped>
.menu-bar {
  background: #1D4849;
}

.category-drop {
  margin-right: 5vw;
}

.form {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
