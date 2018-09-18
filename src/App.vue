<template>
  <div id="app">
    Header
    <router-view></router-view>
  </div>
</template>

<script>
import Splash from './components/Splash.vue'

export default {
  name: 'App',

  components: {
  }
}
</script>

<style>
@import '../public/css-reset.css';
@import url("https://fonts.googleapis.com/css?family=Fredoka+One");

body {
  font-family: 'Fredoka One';
}
</style>
