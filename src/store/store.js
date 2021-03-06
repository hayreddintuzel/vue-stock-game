import Vue from 'vue';
import Vuex from 'vuex';
import { stocks, money, portfolio } from './data';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stocks,
    money,
    portfolio,
  },
  mutations: {
    endDay(state) {
      let random, sign;
      for (let i = 0; i < state.stocks.length; i += 1) {
        random = Math.random() * 10;
        sign = Math.random() * 10 > 5 ? '+' : '-';
        if (sign === '+') {
          state.stocks[i].value += Math.ceil(random);
        } else {
          state.stocks[i].value -= Math.ceil(random);
        }
      }
    },
    buyStock(state, payload) {
      let intAmount = parseInt(payload.amount)
      state.portfolio[payload.index-1].amount += intAmount;
      state.money -= state.stocks[payload.index-1].value * intAmount;
    },
    sellStock(state, payload) {
      let intAmount = parseInt(payload.amount)
      state.portfolio[payload.index-1].amount -= intAmount;
      state.money += state.stocks[payload.index-1].value * intAmount;
    }
  },
  actions: {
    save(state) {
      setTimeout(function () {
        console.log('aaa');
      },3000)
    },
    load(state) {
      setTimeout(function () {
        console.log('aaa');
      },3000)
    }
  },
});
