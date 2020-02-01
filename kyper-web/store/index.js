import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const account = {
  namespaced: true,
  state: {
    loggedIn: false,
  },
  mutations: {
    login (state) {
      state.loggedIn = true
    },
    logout (state) {
      state.loggedIn = false
    },
  },
  actions: {
    login ({ commit }) {
      commit('login')
    },
    logout ({ commit }) {
      commit('logout')
    },
  },
  modules: {
  },
}

export default new Vuex.Store({
  modules: {
    account,
  },
})
