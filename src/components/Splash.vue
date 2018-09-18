<template>
  <div>
    <b-jumbotron class="jumbo" header="Welcome to Spreetail"
      lead="World's finest purveyor of knockoff Ikea furniture"></b-jumbotron>
    <MenuBar />
  </div>
</template>

<script>
import MenuBar from './MenuBar'

export default {
  name: 'Splash',

  components: {
    MenuBar
  }
}
</script>

<style scoped>
.jumbo {
  margin-bottom: 0;
}
</style>
