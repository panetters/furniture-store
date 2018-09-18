<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld
  }
}
</script>

<style>
@import '../public/css-reset.css';
@import url("https://fonts.googleapis.com/css?family=Fredoka+One");

#app {
  font-family: 'Fredoka One';
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
