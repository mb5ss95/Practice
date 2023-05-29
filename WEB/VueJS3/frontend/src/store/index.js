import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title : "",
    sData : new Object
  },
  getters: {
  },
  mutations: {
    SET_TITLE(state, data) {
      state.title = data;
    },
    SET_DATA(state, data) {
      state.sData = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
