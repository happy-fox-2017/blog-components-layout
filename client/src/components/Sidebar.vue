<template lang="html">
  <div class="columns">
    <div class="column">
      <nav class="panel">
        <p class="panel-heading">
          Menu
        </p>
        <div class="panel-block" v-for="(article, index) in articles">
          <span class="panel-icon">
            <i class="fa fa-book"></i>
          </span>
           <!-- $route.params. -->
          <router-link :to="'/blog/'+article._id">{{ article.title }}</router-link>
        </div>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>

<style lang="css">
</style>
