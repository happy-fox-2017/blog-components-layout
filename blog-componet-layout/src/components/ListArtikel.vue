<template>
     <div class="container-fluid">
          <div v-for="listartikel in listartikels">
               <div class="col-md-4">
                 <div class="thumbnail">
                  <h2>{{ listartikel.title }}</h2>
                   <a href="/w3images/fjords.jpg">
                     <img src="../assets/fullstack.jpg" alt="Fjords" style="width:100%">
                     <div class="caption">
                         <h4>{{ listartikel.description }}
                        </h4>
                     </div>
                   </a>
                 </div>
               </div>
          </div>
     </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'listartikel',
  props: ['title', 'description'],
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
