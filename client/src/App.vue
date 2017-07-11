<template>
  <div id="app">
    <navbar-blog></navbar-blog>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarBlog from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    NavbarBlog
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
  margin-top: 60px;
}
</style>
