<template lang="html">
  <div class="content">
    <div class="column">
      <article class="message is-success">
        <div class="message-header">
          <p>{{ data.title }}</p>
          <button class="delete"></button>
        </div>
        <div class="message-body">
          {{ data.body }}
          <br>
          author: {{ data.createdby }}
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      // id: ,
      data: []
    }
  },
  watch: {
    id (newId) {
      var self = this
      this.axios.get('http://localhost:3000/api/articles/' + self.id)
      .then(function (response) {
        console.log(response.data)
        self.data = response.data
      })
    }
  },
  methods: {
    getDataById () {
      var self = this
      this.axios.get('http://localhost:3000/api/articles/' + self.id)
      .then(function (response) {
        console.log(response.data)
        self.data = response.data
      })
    }
  },
  created () {
    this.getDataById()
  }
}
</script>

<style lang="css">
</style>
