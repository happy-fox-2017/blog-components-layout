import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dashboard from '@/components/Dashboard'
import detail from '@/components/detail'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          component: Content
        },
        {
          path: '/detail/:id',
          component: detail,
          props: true
        }
      ]
    }
  ]
})
