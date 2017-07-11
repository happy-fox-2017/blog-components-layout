<template>
  <div>
    <div class="ui inverted secondary small labeled icon top fixed menu" style="background-color: #004b40">
      <div class="item" style="width: 10px;"></div>
      <div class="item header" style="width: 200px; font-size: 1.5em">Bloger Navigator</div>
      <div class="right item">
        <i class="home icon"></i>
        <router-link to="/">Home</router-link>
      </div>
      <div class="item">
        <i class="newspaper icon"></i><router-link to="/articles/">Articles</router-link>
      </div>
      <div class="item">
        <i class="users icon"></i>
        Sign In
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>
