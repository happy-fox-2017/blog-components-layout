<template lang="html">
    <nav class="navbar ">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to='/' class="navbar-item"> Home </router-link>
          <router-link to='/blog' class="navbar-item"> Blog </router-link>
        </div>
        <div class="navbar-end">
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      is_login: false,
      usernameLogin: '',
      passwordLogin: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
