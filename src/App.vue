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

</style>
