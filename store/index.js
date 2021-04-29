import Vue from 'vue'
import Vuex from 'vuex'
import name from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    new name({
    storage:window.localStorage,
    }).plugin,
    ],
    // state 里面的数据自动本地存储
})
