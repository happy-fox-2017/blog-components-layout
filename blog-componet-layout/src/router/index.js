import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Artikel from '@/components/Blogdetail'
import ListArtikel from '@/components/ListArtikel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      children: [
        {
          path: '',
          component: ListArtikel
        },
        {
          path: 'artikel/:id',
          name: 'artikel',
          component: Artikel
        }
      ]
    }
  ]
})
