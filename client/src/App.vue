<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
    }
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
  border-bottom: 1px;
}
.navbar-brand {
    /*background-color: #57767c;*/
}
div#navMenuExample{
    /*background-color: #57767c;*/
}
a.navbar-item {
  /*color: white;*/
}
a.navbar-link.is-active{
  /*color: white;*/
}
a.navbar-link {
  /*color: white;*/
}
</style>
