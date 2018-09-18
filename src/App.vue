<template>
  <div id="app">
    <Navbar />
    <MenuBar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import MenuBar from './components/MenuBar';

export default {
  name: 'App',

  components: {
    Navbar,
    MenuBar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fredoka+One");

.logo {
  font-family: "Fredoka One"
}

.pointer:hover {
  cursor: pointer;
}
</style>
