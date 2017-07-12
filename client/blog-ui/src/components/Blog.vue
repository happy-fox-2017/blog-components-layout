<template lang="html">
  <div id="blog" class="columns">
    <div class="column is-one-quarter" style="margin-left: 10px">
      <Sidebar :datas="articles"></Sidebar>
    </div>
    <Content :datas="articles"></Content>
  </div>
</template>

<script>
import Content from '@/components/Content'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'blog',
  data () {
    return {
      articles: []
    }
  },
  components: {
    Content,
    Sidebar
  },
  methods: {
    getArticles () {
      // let self = this
      this.$http.get('http://localhost:3000/articles')
      .then(results => {
        this.articles = results.data
      })
    }
  },
  created () {
    // console.log(this)
    this.getArticles()
  }
}
</script>

<style lang="css">
</style>
