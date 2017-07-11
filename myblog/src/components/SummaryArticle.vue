<template>
  <div class="row">
    <div class="col-md-12">
      <div v-for="article, index in articles" :key="index" class="panel panel-default" >
        <div class="panel-heading">
          <router-link
            :to="'/articles/' + article._id"
          >
            {{ article.title }}
          </router-link>
        </div>
        <div class="panel-body">
          {{article.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ShortArticle from '@/components/ShortArticle';

export default {
  name: 'summaryArticle',
  props: ['articles'],
  data() {
    return {
    };
  },
  components: {
    ShortArticle,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
