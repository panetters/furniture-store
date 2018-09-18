<template>
  <b-container fluid v-if="details[0]">
    <b-row>
      <ProductDetailView :model="modelName" :imageURL="curImageURL" :price="curPrice" />
      <ProductDetailBuy :details="details" :updateSelection="updateSelection"/>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';

import ProductDetailView from './ProductDetailView';
import ProductDetailBuy from './ProductDetailBuy';

export default {
  name: 'ProductDetail',

  props: ['modelName'],

  components: {
    ProductDetailView,
    ProductDetailBuy
  },

  data() {
    return {
      details: [],
      curImageURL: '',
      curPrice: '',
    }
  },

  methods: {
    updateSelection(url) {
      this.curImageURL = url;
    }
  },

  mounted() {
    axios.get(`/api/model?modelName=${this.modelName}`)
      .then(res => {
        this.details = res.data;
        this.curImageURL = res.data[0].image_url;
        this.curPrice = res.data[0].price;
      });
  }
}
</script>

<style scoped>
.product-model {
  text-align: center;
  font-size: calc(15px + 2vw);
}
</style>
