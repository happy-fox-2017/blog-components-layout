<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-heading">Title</div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" v-model="article.title" class="form-control" id="title">
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <textarea v-model="article.content" class="form-control" rows="5" id="comment"></textarea>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
            <button type="button" class="btn btn-default" @click="cancel">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'articleDetail',
  data() {
    return {
      article: {},
    };
  },
  methods: {
    cancel() {
      this.$router.push({ path: '/articles' });
    },
  },
  mounted() {
    const articleId = this.$route.params.id;
    this.$http.get(`http://localhost:3000/api/articles/${articleId}`)
    .then((response) => {
      this.article = response.data;
    })
    .catch((error) => {
      throw error;
      // console.log(error);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
