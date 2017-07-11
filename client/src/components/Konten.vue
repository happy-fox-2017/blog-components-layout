<template lang="html">
  <div class="content">
    <div class="column">
      <article  class="message is-success" v-for="article in articles">
        <div class="message-header">
          <p>{{ article.title }}</p>
          <button class="delete"></button>
        </div>
        <div class="message-body">
          {{ article.body }}
          <br>
          author: {{ article.createdby }}
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      var self = this
      this.axios.get('http://localhost:3000/api/articles')
      .then(function (response) {
        console.log(response.data)
        self.articles = response.data
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
