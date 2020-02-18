import Vue from 'vue';
import Loading from 'vue-loading-overlay';
import App from './App.vue';
import router from './router';

import 'vue-loading-overlay/dist/vue-loading.css';
import './styles/app.scss';

Vue.use(Loading, {
  color: 'blue',
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
