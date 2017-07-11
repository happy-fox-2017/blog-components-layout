import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Blog from '@/components/Blog'
import Konten from '@/components/Konten'
import Detail from '@/components/Detail'

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
      component: Blog,
      children: [
        {
          path: '',
          component: Konten
        },
        {
          path: '/blog/:id',
          component: Detail,
          props: true
        }
      ]
    }
  ]
})
