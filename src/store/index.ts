import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import applications from './applications';
import fileSystem from './fileSystem';

interface State {
  powerOn: boolean;
  bootup: boolean;
  showStartMenu: boolean;
}

const state: State = {
  powerOn: false,
  bootup: false,
  showStartMenu: false,
};

export const store = createStore({
  state,
  mutations: {
    setPowerMutation(state: State, powerStatus: boolean) {
      state.powerOn = powerStatus;
    },
    setBootupMutation(state: State) {
      state.bootup = !state.bootup;
    },
    setStartMenuMutation(state: State) {
      state.showStartMenu = !state.showStartMenu;
    },
  },
  actions: {
    toggleStartMenu({ commit }) {
      commit('setStartMenuMutation');
    },
    togglePower({ commit, dispatch, state }) {
      const currentState = state.powerOn;
      if (currentState) {
        commit('setPowerMutation', false);
      } else {
        commit('setPowerMutation', true);
        dispatch('toggleBootup');
      }
    },
    toggleBootup({ commit }) {
      commit('setBootupMutation');
    },
  },
  modules: {
    applications,
    fileSystem,
  },
  // plugins: [new VuexPersistence().plugin],
});
