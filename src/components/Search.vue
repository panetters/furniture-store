<template>
  <div>
    <div class="cat-header">Search for: {{ searchQuery }}</div>
    <b-container fluid>
      <b-row>
        <CategoryView v-for="product in furniture" :key="product.product_id" :product="product" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';

import CategoryView from './CategoryView';

export default {
  name: 'Search',

  props: ['searchQuery'],

  components: {
    CategoryView
  },
  
  data() {
    return {
      furniture: []
    }
  },

  methods: {
    updateFurniture() {
      axios.get(`/api/search?searchQuery=${this.searchQuery}`)
      .then(res => {
        this.furniture = res.data;
      })
    }
  },

  mounted() {
    this.updateFurniture();
  },

  watch: {
    searchQuery() {
      this.updateFurniture();
    }
  }
}
</script>

<style scoped>
.cat-header {
  text-align: center;
  font-size: calc(25px + 3vw);
}
</style>
