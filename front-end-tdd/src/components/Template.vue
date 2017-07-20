<template>
  <div class="col-sm-9 col-md-10 ">
    <div class="Template">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p class = "text-left">{{detailArtikel.judul}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="lead">{{detailArtikel.pesan}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="lead">Autor : {{detailArtikel.autor}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>


<script>
  export default {
    name: 'Template',
    props: ['id'],
    data () {
      return {
        detailArtikel: ''
        // id: this.$route.params.id
      }
    },
    watch: {
      id (newId) {
        var self = this
        this.$http.get('http://localhost:3000/api/artikel/' + self.id)
        .then(function (respone) {
          self.detailArtikel = respone.data
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    created () {
      var self = this
      this.$http.get('http://localhost:3000/api/artikel/' + self.id)
      .then(function (respone) {
        self.detailArtikel = respone.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style scoped>
  .text-left {
    text-align: left;
    font-size: 40px;
    font-weight: bold;
  }
</style>
