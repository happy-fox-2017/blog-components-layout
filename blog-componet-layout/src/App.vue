<template>
  <div id="app">
     <HeaderTop></HeaderTop>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTop from '@/components/Header'
export default {
  name: 'app',
  components: {
    HeaderTop
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
  /*margin-top: 60px;*/
}
</style>
