<template>
  <div>
    <navbar></navbar>
    
    <div class="col-sm-3 col-md-2 sidebar" style="padding-top:80px">
      <h3>Menu List</h3>
      <ul class="nav nav-sidebar">
        <li v-for="title in data"><router-link :to="'/detail/' +title._id">{{title.title}}</router-link></li>
      </ul>
    </div>
    <router-view :data='data'></router-view>
    <!-- <Contentblog v-bind:data='data'></Contentblog> -->
  </div>
</template>

<script type="text/javascript">
import navbar from '@/components/navbar'
import Contentblog from '@/components/Content'
export default {
  data () {
    return {
      data: []
    }
  },
  components: {
    navbar,
    Contentblog
  },
  methods: {
    getAllblog () {
      this.$http.get('http://localhost:3000/blog/article')
      .then((res) => {
        // console.log(res)
        this.data = res.data
        // console.log(this.data)
        // console.log(res.data[0])
        // console.log(res.data[0].title)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getAllblog()
  }
}
</script>
