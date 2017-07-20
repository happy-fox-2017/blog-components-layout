<template>
  <v-app dark>
    <nav-bar></nav-bar>
  </v-app>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  data () {
    return {
    }
  },
  components: {
    navBar
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
