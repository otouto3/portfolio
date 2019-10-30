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

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0d9e66;
}

</style>
