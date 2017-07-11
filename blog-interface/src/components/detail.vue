<template>
  <div class="detail">
    <h1>detail of content</h1>
    <ul>
      <!-- <p>{{id}}</p> -->
      <h4>{{title}}</h4>
      <br>
      <h5>{{author}}</h5>
      <br>
      <p>{{content}}</p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      title: '',
      author: '',
      content: ''
    }
  },
  props: ['id'],
  watch: {
    id (paramId) {
      // let url = `http://localhost:3000/blog/article/${paramId}`
      // console.log(paramId)
      // console.log(url)
      this.$http.get(`http://localhost:3000/blog/article/${paramId}`)
      .then(res => {
        // console.log(res)
        this.title = res.data.title
        this.author = res.data.author
        this.content = res.data.content
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
.detail{
  padding-top: 80px;
}

.detail{
  margin-bottom: 20px;
}
</style>
