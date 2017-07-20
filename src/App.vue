<template>
  <div id="app">
    <Header></Header>
    <sidebar></sidebar>
    <router-view></router-view>
    <!--<hello></hello>-->
  </div>
</template>

<script>
import Blog from './components/Blog'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Blog, Header, Sidebar
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
