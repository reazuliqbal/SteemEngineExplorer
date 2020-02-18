import Vue from 'vue';
import VueRouter from 'vue-router';
import Explorer from '../views/Explorer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/@:username',
    name: 'explorer',
    component: Explorer,
  },
  {
    path: '/tx/:txid',
    name: 'transaction',
    component: () => import(/* webpackChunkName: "transaction" */ '../views/Transaction.vue'),
  },
  {
    path: '/b/:block',
    name: 'block',
    component: () => import(/* webpackChunkName: "block" */ '../views/Block.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
