<template>
  <div>
    <ProductView v-for="product in furniture" :key="product.product_id" :product="product" />
  </div>
</template>

<script>
import axios from 'axios';

import ProductView from './ProductView';

export default {
  name: 'Category',

  props: ['catName'],

  components: {
    ProductView
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
</style>
