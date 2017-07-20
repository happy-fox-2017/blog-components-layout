<template>
     <div class="container-fluid">
          <div v-for="artikel in artikels">
               <div class="col-md-4">
                 <div class="thumbnail">
                  <h2>{{ artikel.title }}</h2>
                   <a href="/w3images/fjords.jpg">
                     <img src="../assets/fullstack.jpg" alt="Fjords" style="width:100%">
                     <div class="caption">
                         <h4>{{ artikel.description }}
                        </h4>
                     </div>
                   </a>
                 </div>
               </div>
          </div>
     </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'listartikel',
  props: ['artikels']
}
</script>
