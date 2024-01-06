import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import browser from './browser';
import applications from './applications';
import fileSystem from './fileSystem';
import settings from './settings';

interface State {
  version: string | null;
  powerOn: boolean;
  startup: boolean;
  showStartMenu: boolean;
}

const state: State = {
  version: '1.0.4',
  powerOn: false,
  startup: false,
  showStartMenu: false,
};

export const store = createStore({
  state,
  mutations: {
    setPowerMutation(state: State, powerStatus: boolean) {
      state.powerOn = powerStatus;
    },
    setStartupMutation(state: State) {
      state.startup = !state.startup;
    },
    setStartMenuMutation(state: State) {
      state.showStartMenu = !state.showStartMenu;
    },
    setVersionMutation(state: State, version: string) {
      state.version = version;
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
        dispatch('toggleStartup');
      }
    },
    toggleStartup({ commit }) {
      commit('setStartupMutation');
    },
    setVersion({ commit }, version: string) {
      commit('setVersionMutation', version);
    },
  },
  modules: {
    applications,
    fileSystem,
    browser,
    settings,
  },
  plugins: [new VuexPersistence({ key: 'myOs-persist-store' }).plugin],
});
