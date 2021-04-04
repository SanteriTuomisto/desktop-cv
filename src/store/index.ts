import { createStore } from 'vuex'

export default createStore({
  state: {
    startUpMenuOpen: false,
  },
  mutations: {
    toggleStartMenuMutation(state) {
      state.startUpMenuOpen = !state.startUpMenuOpen;
    },
  },
  getters: {
    getStartUpMenuState(state) {
      return state.startUpMenuOpen;
    },
  },
  actions: {
    toggleStartMenu(context) {
      context.commit('toggleStartMenuMutation');
    },
  },
  modules: {
  }
})
