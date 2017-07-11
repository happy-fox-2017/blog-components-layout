<template>
    <div class="short-article">
      <ul class="list-group">
        <router-link
          v-for="article, index in articles"
          class="list-group-item"
          :to="'/articles/' + article._id"
          :key="index">
          {{ article.title }}
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'shortArticle',
  props: ['articles'],
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
