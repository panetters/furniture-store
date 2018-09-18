<template>
  <div>
    <div class="cat-header">{{ catName }}</div>
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
  name: 'Category',

  props: ['catName'],

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
      axios.get(`/api/category?catName=${this.catName}`)
      .then(res => {
        this.furniture = res.data;
      })
    }
  },

  mounted() {
    this.updateFurniture();
  },

  watch: {
    catName() {
      this.updateFurniture();
    }
  },
}
</script>

<style scoped>
.cat-header {
  text-align: center;
  font-size: calc(25px + 3vw);
}
</style>
