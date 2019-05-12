import Vue from 'vue';
import Router from 'vue-router';
import Stocks from './components/Stocks.vue';
import Portfolio from './components/Portfolio.vue';

Vue.use(Router);

const routes = [
  { path: '/stocks', component: Stocks },
  { path: '/portfolio', component: Portfolio},
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
});
