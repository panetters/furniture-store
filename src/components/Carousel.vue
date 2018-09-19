<template>
  <b-carousel class="splash-show" style="text-shadow: 1px 1px 2px #000;"
    controls indicators :interval="5000">
    <b-carousel-slide v-for="slide in slides" :key="slide.product_id" :caption="slide.model"
      :text="slide.color" :img-src="slide.image_url" @click.native="chooseSlide(slide.model)">
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: 'Carousel',

  props: ['slides'],

  methods: {
    chooseSlide(model) {
      this.$router.push({ path: `/model/${model}` });
    }
  }
}
</script>

<style scoped>
.splash-show {
  width: calc(250px + 3vw);
}

.splash-show:hover {
  cursor: pointer;
}
</style>
