<template>
  <div class="row article-list">
    <div class="col-md-4">
      <short-article :articles="articles"></short-article>
    </div>
    <div class="col-md-8">
      <summary-article :articles="articles"></summary-article>
    </div>
  </div>
</template>

<script>

import ShortArticle from '@/components/ShortArticle';
import SummaryArticle from '@/components/SummaryArticle';

export default {
  name: 'articleList',
  data() {
    return {
      articles: [],
    };
  },
  components: {
    ShortArticle,
    SummaryArticle,
  },
  methods: {
    getArticles() {
      this.$http.get('http://localhost:3000/api/articles')
      .then((response) => {
        console.log(response);
        this.articles = response.data;
      })
      .catch((error) => {
        throw error;
        // console.log(error);
      });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-list {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
