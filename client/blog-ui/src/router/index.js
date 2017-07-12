import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Blog from '@/components/Blog'
import Article from '@/components/Article'
// import Myheader from '@/components/Myheader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    }
  ]
})
