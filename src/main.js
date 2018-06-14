// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Store from '@/store/store';


import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);

const store = new Vuex.Store(Store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
  render: h => h(App),
});
