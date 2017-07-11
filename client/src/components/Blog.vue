<template lang="">
  <div class="blog">
    <h1>Welcome To The Blog</h1>
    <div class="columns">
      <div class="column is-one-quarter">
        <Sidebar :articles="articles"></Sidebar>
      </div>
      <div class="column is-three-quarter">
        <router-view :articles="articles"></router-view>
      </div>

    </div>

  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Sidebar
  },
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
        self.articles = response.data
        console.log(response.data)
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
