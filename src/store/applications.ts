import { ActionContext } from 'vuex';

type ApplicationType = 'fileExplorer' | 'browser';

interface Application {
  id: number;
  type: ApplicationType;
  position: any;
}

interface State {
  id: number;
  openApplications: Array<Application>;
  activeWindowId: number | null;
}

const state: State = {
  id: 0,
  openApplications: [],
  activeWindowId: null,
};

const mutations = {
  increaseIdMutation(state: State) {
    state.id = state.id + 1;
  },
  openApplicationMutation(state: State, application: Application) {
    state.openApplications.push(application);
  },
  closeApplicationMutation(state: State, id: number) {
    state.openApplications = state.openApplications.filter(app => app.id !== id); 
  },
  setActiveWindowIdMutation(state: State, id: number) {
    state.activeWindowId = id;
  },
};

const actions = {
  openApplication(context: ActionContext<State, any>, application: Application) {
    const nextId = context.state.id;
    const app = {
      ...application,
    };
    app.id = nextId;
    context.commit('increaseIdMutation');
    context.commit('setActiveWindowIdMutation', nextId);
    context.commit('openApplicationMutation', app);
  },
  closeApplication(context: ActionContext<State, any>, id: number) {
    context.commit('closeApplicationMutation', id);
    context.dispatch('selectOtherActiveWindow');
  },
  setActiveWindowId(context: ActionContext<State, any>, id: number) {
    context.commit('setActiveWindowIdMutation', id);
  },
  selectOtherActiveWindow(context: ActionContext<State, any>) {
    const openApplications = context.state.openApplications;
    if (openApplications.length > 0) {
      const lastId = openApplications[openApplications.length - 1].id;
      context.commit('setActiveWindowIdMutation', lastId);
    } else {
      context.commit('setActiveWindowIdMutation', null);
    }
  },
};

const getters = {
  getOpenApplications(state: State) {
    return state.openApplications;
  },
  getActiveWindowId(state: State) {
    return state.activeWindowId;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};