<template>
  <div class="blog container">
    <h2>{{title}}</h2>
    <hr>
    <div class="row">
      <div class="col-md-9">
        <div class="col-sm-6 col-md-6" v-for="item in items">
          <div class="thumbnail">
            <img src="http://placehold.it/350x150">
            <div class="caption">
              <h3>{{item.title}}</h3>
              <h3>{{item.article}}</h3>
              <p><a href="#" class="btn btn-primary" role="button">Read More</a> <a href="#" class="btn btn-danger" role="button" >Delete</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    items: []
  },
  methods: {
      getItems: function() {
        var self = this
        this.$http.get('http:localhost:3000/articles')
        .then(function(response) {
          self.items = response.data
          console.log(response);
        })
        .catch( function(err) {
          console.log(err);
        })
      }
    },
    {
      created: function() {
        var self = this
        self.getItems()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
