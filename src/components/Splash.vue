<template>
  <div class="splash-content">
    <b-jumbotron class="jumbo logo" header="Welcome to Mikea"
      lead="World's finest purveyor of knockoff Ikea furniture"></b-jumbotron>
    <div class="slide-container">
      <Carousel v-for="(slide, ind) in slides" :slides="slides[ind]" :key="ind"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Carousel from './Carousel';

export default {
  name: 'Splash',

  components: {
    Carousel
  },

  data() {
    return {
      slides: []
    }
  },

  mounted() {
    axios.get('/api/slides')
      .then(res => {
        this.slides.push(res.data.slice(0, 4));
        this.slides.push(res.data.slice(4, 10));
        this.slides.push(res.data.slice(10));
      })
  }
}
</script>

<style scoped>
.jumbo {
  color: #1D4849;
  margin-bottom: 0;
  background: #8DF3CF url('https://spreetail.com/wp-content/themes/spreetail/assets/img/brand/pattern2.png');
}

.slide-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background: #1D4849;
}

.splash-show {
  width: calc(250px + 3vw);
}
</style>
