<template>
  <div class="row">
    <div class="col-md-4">
      <short-article></short-article>
    </div>
  </div>
</template>

<script>

import ShortArticle from '@/components/ShortArticle';

export default {
  name: 'articleList',
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
