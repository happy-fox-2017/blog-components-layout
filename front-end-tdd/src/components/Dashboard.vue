<template>
  <div class="dashboard">
    <nav class="navbar navbar-inverse navbar-fixed-top color">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
           <a class="navbar-brand"> <router-link to="/dashboard/">Hacktiv8 Blog</router-link> </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Welcome Guest</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid main">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar" id="sidebar">
          <ul class="nav nav-sidebar">
            <li>List Of Article</li>
            <ul>
              <li v-for="artikel in listArtikel"> <router-link :to="'/dashboard/'+artikel._id">{{artikel.judul}}</router-link></li>
            </ul>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
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
.navbar-default {
  border-color: #ffffff;
  background-color: #f18f01;
}
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
