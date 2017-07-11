<template>
    <div class="ten wide column">
        <div class="ui stacked segment">
        <h1 class="ui header">{{ article.title }}</h1>
        <div class="meta"><span>Author: {{ article.authorName }}</span></div>
        <br />
        <br />
        <p>{{ article.content }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                article: {}
            }
        },
        methods: {
            getOneArticles () {
                let id = this.$route.params.id
                console.log('ini params------', id)
                let self = this;
                this.$http.get('http://localhost:3000/api/article/'+id)
                .then((res)=>{
                    self.article = res.data.data
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        },
        mounted () {
            this.getOneArticles();
        },
        watch: {
            '$route' (to, form){
                this.getOneArticles()
            }
        }
    }
</script>