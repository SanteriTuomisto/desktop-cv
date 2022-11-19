import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import applications from './applications';
import fileSystem from './fileSystem';

interface State {
  powerOn: boolean;
  bootup: boolean;
  startup: boolean;
  showStartMenu: boolean;
}

const state: State = {
  powerOn: false,
  bootup: false,
  startup: false,
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
    setStartupMutation(state: State) {
      state.startup = !state.startup;
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
    toggleBootup({ commit, dispatch, state }) {
      commit('setBootupMutation');
      if (state.bootup) {
        dispatch('toggleStartup');
      }
    },
    toggleStartup({ commit }) {
      commit('setStartupMutation');
    },
  },
  modules: {
    applications,
    fileSystem,
  },
  // plugins: [new VuexPersistence().plugin],
});
