import { ActionContext } from 'vuex';

type ApplicationType = 'fileExplorer' | 'browser';

interface Position {
  top: number;
  left: number;
}

interface Size {
  width: number;
  height: number;
}

interface Application {
  id: number;
  type: ApplicationType;
  position: Position;
  minimized: boolean;
  maximized: boolean;
  size: Size;
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
  updateApplicationMutation(state: State, application: Application) {
    const index = state.openApplications.findIndex((app) => app.id === application.id);
    if (index >= 0) {
      const updatedApp = { 
        ...state.openApplications[index],
        ...application,
      };
      state.openApplications[index] = updatedApp;
    }
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
  updateApplication(context: ActionContext<State, any>, application: Application) {
    context.commit('updateApplicationMutation', application);
  },
  closeApplication(context: ActionContext<State, any>, id: number) {
    context.commit('closeApplicationMutation', id);
    context.dispatch('selectOtherActiveWindow');
  },
  setActiveWindowId(context: ActionContext<State, any>, id: number) {
    context.commit('setActiveWindowIdMutation', id);
    context.commit('updateApplicationMutation', {
      id: id,
      minimized: false,
    });
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
  getApplicationById: (state: State) => (id: number) => {
    return state.openApplications.find(app => app.id === id);
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};