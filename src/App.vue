<template>
  <div id="app">
    <Navbar v-if="$route.path !== '/main'"/>
    <MenuBar v-if="$route.path !== '/main'"/>
    <router-view></router-view>
    <b-modal ref="popup" size="lg" centered hide-footer hide-header hide-backdrop>
      <img src="./assets/fake-popup.png" />
    </b-modal>
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
  },

  methods: {
    showModal() {
      this.$refs.popup.show()
    },

    chanceModal() {
      if (Math.ceil(Math.random() * 20) === 1) this.showModal();
      setTimeout(this.chanceModal, 30000);
    }
  },

  mounted() {
    this.chanceModal();
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand");
@import url("https://fonts.googleapis.com/css?family=Fredoka+One");

body {
  font-family: "Quicksand"
}

.logo {
  font-family: "Fredoka One";
}

.pointer:hover {
  cursor: pointer;
}

.modal-content, .modal-body {
  margin: 0;
  padding: 0;
  width: 50%;
}
</style>
