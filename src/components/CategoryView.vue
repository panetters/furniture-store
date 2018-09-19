<template>
  <b-col class="flex-column" v-on:click="modelSelect(product.model)">
    <div class="category-model">{{ product.model }}</div>
    <img class="category-image" :src="product.image_url" />
    <div class="category-price">{{ product.price }}</div>
  </b-col>
</template>

<script>
export default {
  name: 'CategoryView',

  props: ['product'],

  methods: {
    modelSelect(model) {
      this.$router.push({ path: `/model/${model}` });
    }
  }
}
</script>

<style scoped>
.flex-column {
  text-align: center;
  cursor: pointer;
}

.category-model {
  font-size: calc(15px + 2vw);
}

.category-image {
  width: calc(40px + 20vw);
}

.category-price {
  font-size: calc(10px + 1.5vw);
}
</style>
