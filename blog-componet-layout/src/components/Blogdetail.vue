<template>
     <div class="">
          <div>
               <div class="col-md-9">
                 <div class="thumbnail">
                  <h2>{{ listartikel.title }}</h2>
                     <img src="../assets/fullstack.jpg" style="width:100%">
                     <div class="caption">
                         <h4>{{ listartikel.description }} </h4>
                         <h5>{{ listartikel.author }}</h5>
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
  name: 'blogdetail',
  data () {
    return {
      listartikel: {},
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
  methods: {
    getArtikel () {
      let idartikel = this.$route.params.id
      let self = this
      axios.get('http://localhost:3000/api/artikels/' + idartikel)
           .then((response) => {
             self.listartikel = response.data
           })
         .catch((err) => {
           console.log(err)
         })
    }
  },
  mounted () {
    this.getArtikel()
  }
}
</script>
