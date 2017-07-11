<template>
     <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
                 <ul class="list-group" v-for="artikel in listartikels">
                   <li class="list-group-item"><router-link :to=" '/blog/artikel/'+artikel._id"> {{ artikel.title }}</router-link></li>
                 </ul>
            </div>
                 <router-view></router-view>
          </div>

     </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'blog',
  data () {
    return {
      listartikels: []
    }
  },
  methods: {
    getArtikel () {
      let self = this
      axios.get('http://localhost:3000/api/artikels')
           .then((response) => {
             self.listartikels = response.data
           })
         .catch((err) => {
           console.log(err)
         })
    }
  },
  created () {
    this.getArtikel()
  }
}
</script>
