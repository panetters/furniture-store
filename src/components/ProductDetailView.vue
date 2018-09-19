<template>
  <b-col class="flex-column">
    <div class="product-model">{{ model }}</div>
    <img class="product-image" :src="imageURL" />
    <div class="product-price">Price: {{ price }}</div>
  </b-col>
</template>

<script>
export default {
  name: 'ProductDetailView',

  props: ['model', 'imageURL', 'price'],
}
</script>

<style scoped>
.flex-column {
  text-align: center;
}

.product-model {
  font-weight: bold;
  font-size: calc(15px + 2vw);
}

.product-image {
  width: calc(100px + 20vw);
}

.product-price {
  font-size: calc(8px + 1.2vw);
}
</style>
