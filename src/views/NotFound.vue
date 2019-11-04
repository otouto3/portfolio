<template>
  <div class="not_found">
    <GradationFont msg="NOT FOUND"/>
    <router-link id="home-nav" to="/" exact><GradationFont msg="back to our site"/></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import GradationFont from '../components/GradationFont.vue'

export default {
  name: 'home',
  components: {
    GradationFont
  }
}
</script>
