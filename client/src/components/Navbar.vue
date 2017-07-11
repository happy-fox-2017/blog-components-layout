<template lang="html">
  <div class="header">
    <nav class="navbar ">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-github"></i>
          </span>
        </a>

        <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-twitter"></i>
          </span>
        </a>

        <div class="navbar-burger burger" data-target="navMenuExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/blog">Blog</router-link>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="https://github.com/erwinwahyura" target="_blank">
            Github
          </a>
          <a class="navbar-item" href="https://twitter.com/erwar12" target="_blank">
            Twitter
          </a>
          <a class="navbar-item " href="http://bulma.io/">
            Login
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Blog from '@/components/Blog'
export default {
  components: {
    Blog
  }
}
</script>

<style lang="css">
</style>
