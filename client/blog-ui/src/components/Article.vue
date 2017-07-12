<template lang="html">
  <div id="article">
    <h1>{{ data.title }}</h1>
    <p>{{ data.content}}</p>
    <br>
    <p>Author: {{ data.author }}</p>
  </div>

</template>

<script>
export default {
  name: 'article',
  data () {
    return {
      data: []
    }
  },
  methods: {
    getOneArticle () {
      console.log(this.route)
      this.$http.get('http://localhost:3000/articles/' + this.$route.params.id)
      .then(result => {
        this.data = result.data
      })
    }
  },
  created () {
    this.getOneArticle()
  }
}
</script>

<style lang="css">
</style>
