<template>
  <div id="app">
    <HeaderItem/>
    <router-view/>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem'

export default {
  name: 'app',
  components : {
    HeaderItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
