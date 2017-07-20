import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dashboard from '@/components/Dashboard'
import MainDashboard from '@/components/MainDashboard'
import Template from '@/components/Template'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          component: MainDashboard
        },
        {
          path: '/dashboard/:id',
          component: Template,
          props: true
        }
      ]
    }
  ]
})
