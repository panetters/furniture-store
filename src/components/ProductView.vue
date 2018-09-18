<template>
  <div>
    <img :src="product.image_url" />
  </div>
</template>

<script>
export default {
  name: 'ProductView',

  props: ['product']
}
</script>

<style scoped>
</style>
