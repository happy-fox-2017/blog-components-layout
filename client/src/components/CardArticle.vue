<template>
    <div class="ten wide column">
        <div class="ui cards">
            <div class="card" v-for="listArticle in listArticles">
                <div class="content">
                    <div class="header">{{ listArticle.title }}</div>
                    <div class="description">
                        <div class="meta">
                            <span>author: {{ listArticle.authorName }}</span>
                        </div>
                    </div>
                </div>
                <div class="ui bottom attached button"><i class="file text outline icon"></i>
                    <router-link :to="'/articles/detail/'+listArticle._id"> Read More 
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                listArticles: []
            }
        },
        methods: {
            getAllArticle () {
                let self = this
                this.$http.get('http://localhost:3000/api/article/')
                .then((res)=>{
                    self.listArticles = res.data.data;
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        },
        mounted () {
            this.getAllArticle();
        }

    }
</script>

<style scope>
    
</style>