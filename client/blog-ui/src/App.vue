<template>
  <div id="app">
    <Myheader></Myheader>
    <router-view></router-view>
    <Myfooter></Myfooter>
  </div>
</template>

<script>
import Myheader from '@/components/Myheader'
import Myfooter from '@/components/Myfooter'

export default {
  name: 'app',
  components: {
    Myheader,
    Myfooter
  }
}
</script>

<style scooped>

</style>
