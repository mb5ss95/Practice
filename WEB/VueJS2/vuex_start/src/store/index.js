import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myName : "싸피",
    myAge : 25,
  },
  getters: {
  },
  //state를 변경하기 위해서는 mutations를 거쳐야함
  //해당 mutations를 통해 state가 변경되면 개발자 도구에 기록이 남는다
  //주로 대문자로 선언함 함수(state, data)
  //외부에서 mutatuins을 활용하는 경우
  //this.$store.commit("매서드 이름", 넘겨줄 인자)
  mutations: {
    SET_MY_NAME(state, data){
      state.myName = data;
    },
    SET_MY_AGE(state, data){
      state.myAge = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
