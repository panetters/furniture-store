<template>
  <div v-on:click="testServer">
    Splash
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',

  methods: {
    testServer() {
      axios.get('/api/test')
        .then(res => {
          console.log(res);
        })
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
