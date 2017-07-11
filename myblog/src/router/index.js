import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Main from '@/components/Main';
import ArticleList from '@/components/ArticleList';
import ArticleDetail from '@/components/ArticleDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: '/articles',
          name: 'ArticleList',
          component: ArticleList,
        },
        {
          path: '/articles/:id',
          name: 'ArticleDetail',
          component: ArticleDetail,
        },
      ],
    },
  ],
});
