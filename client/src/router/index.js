import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ArticleList from '@/components/ArticleList'
import CardArticle from '@/components/CardArticle'
import Detail from '@/components/DetailArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/articles',
      component: ArticleList,
      children:[ 
        {
          path: '',
          component: CardArticle
        },
        {
          path: 'detail/:id',
          component: Detail
        }
      ]
    }
  ]
})
