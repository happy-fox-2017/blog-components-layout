import Vue from 'vue'
import Router from 'vue-router'
import MinifiedContent from '@/components/MinifiedContent'
import FullContent from '@/components/FullContent'
import ContentBar from '@/components/ContentBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContentBar',
      component: ContentBar,
      children: [
        {
          path: '',
          component: MinifiedContent
        },
        {
          path: ':id',
          component: FullContent
        }
      ]
    }
  ]
})
