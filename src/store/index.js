import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user: JSON.parse(window.localStorage.getItem('TOUTIAO_USER'))
    user: getItem('TOUTIAO_USER')
  },
  getters: {
    setUser (state, data) {
      state.user = data
      // window.localStorage.setItem('TOUTIAO_USER', JSON.stringify(state.user))
      setItem('TOUTIAO_USER', state.user)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
