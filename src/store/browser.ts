import { ActionContext } from 'vuex';

export interface NetworkItem {
  name: string;
  url: string;
}

const boogle: NetworkItem = {
  name: 'Boogle',
  url: 'www.boogle.com',
};
const empty: NetworkItem = {
  name: '404',
  url: 'not found',
};
const bacefook: NetworkItem = {
  name: 'Bacefook',
  url: 'www.bacefook.com',
};
const dadGpt: NetworkItem = {
  name: 'DadGPT',
  url: 'www.dadgpt.com',
};

interface State {
  history: NetworkItem[];
  network: NetworkItem[];
}

const state: State = {
  history: [boogle],
  network: [
    boogle,
    empty,
    bacefook,
    dadGpt,
  ]
}

const mutations = {
  browserHomeMut(state: State) {
    state.history = [boogle];
  },
  browserAddHistoryMut(state: State, page: NetworkItem) {
    state.history.push(page);
  },
  browserBackwardsMut(state: State) {
    state.history.splice(state.history.length - 1, 1);
  },
};

const actions = {
  browserHome(context: ActionContext<State, any>) {
    context.commit('browserHomeMut');
  },
  browserTryToNavigate(context: ActionContext<State, any>, url: string) {
    const page = context.state.network.find((n) => n.url.toLocaleLowerCase() === url.toLocaleLowerCase());
    if (page == null) {
      context.commit('browserAddHistoryMut', empty);
    } else {
      context.commit('browserAddHistoryMut', page);
    }
  },
  browserBackwards(context: ActionContext<State, any>) {
    context.commit('browserBackwardsMut');
  },
};

const getters = {
  getBrowserHistory(state: State): NetworkItem[] {
    return state.history;
  },
  getNetwork(state: State): NetworkItem[] {
    return state.network;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};