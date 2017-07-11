<template>
    <div style="padding-top: 30px;">
        <div class="ui container">
            <div class="ui grid">
                <div class="six wide column">
                    <div class="ui raised segments">
                        <div class="ui segment" v-for="article in articles">
                            <router-link :to="'/articles/detail/'+article._id">{{ article.title }}</router-link>
                        </div>
                    </div>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      data () {
          return {
            articles: []
          }
      },
      methods: {
        getAllArticle () {
            let self = this;
            this.$http.get('http://localhost:3000/api/article/')
            .then((res)=>{
                console.log(res)
                self.articles = res.data.data
                console.log(self.articles)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
      },
      created () {
          this.getAllArticle()
      }
  }   
</script>

<style scope>
  
</style>