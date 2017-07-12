<template>
  <div id="app">
    <navbar></navbar>
    <div class="columns">
      <div class="column is-3">
        <sidebar></sidebar>
      </div>
      <div class="column is-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import ContentBar from '@/components/ContentBar'
export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    ContentBar
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
  margin-top: 0px;
}
</style>
