import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/views/login/login';
import Layout from '@/views/layout/layout';
import Proxy from '@/views/proxy/proxy';
import Host from '@/views/host/host';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/main',
      name: 'main',
      component: Layout,
      children: [
        {
          path: 'proxy',
          name: 'proxy',
          component: Proxy,
        }, {
          path: 'host',
          name: 'host',
          component: Host,
        },
      ],
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
