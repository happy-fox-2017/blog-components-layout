<template>
      <div class="col-sm-9 col-md-10 ">
        <div v-for = "artikel in listArtikel" class="card" style="width: 20rem;">
          <img class="card-img-top" src="http://placehold.it/318x180" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">{{artikel.judul}}</h4>
            <p class="card-text">{{artikel.pesan}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
</template>

<script>
export default {
  name: 'MainDashboard',
  data () {
    return {
      msg: 'Hello Dashboard',
      listArtikel: ''
    }
  },
  mounted () {
    var self = this
    this.$http.get('http://localhost:3000/api/artikel')
    .then(function (respone) {
      self.listArtikel = respone.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.card {
  float:left;
  margin: 20px;
}
.card img {
  width: 100%;
}
.main {
  margin-top: 70px
}
</style>
