import Vue from 'vue';
import Vuex from 'vuex';
import { stocks } from './data';
import { money } from './data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stocks,
    money,
  },
  mutations: {

  },
  actions: {

  },
});
