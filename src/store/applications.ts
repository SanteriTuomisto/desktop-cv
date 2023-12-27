import { ActionContext } from 'vuex';

type ApplicationType = 'fileExplorer' | 'browser' | 'recycleBin' | 'musicPlayer' | 'terminal';

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
  fileSystemId: number;
}

interface State {
  id: number;
  applications: Array<Application>;
  activeWindowId: number | null;
}

const state: State = {
  id: 0,
  applications: [],
  activeWindowId: null,
};

const mutations = {
  increaseIdMutation(state: State) {
    state.id = state.id + 1;
  },
  openApplicationMutation(state: State, application: Application) {
    state.applications.push(application);
  },
  updateApplicationMutation(state: State, application: Application) {
    const index = state.applications.findIndex((app) => app.id === application.id);
    if (index >= 0) {
      const updatedApp = { 
        ...state.applications[index],
        ...application,
      };
      state.applications[index] = updatedApp;
    }
  },
  closeApplicationMutation(state: State, id: number) {
    state.applications = state.applications.filter(app => app.id !== id); 
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
    const applications = context.state.applications;
    if (applications.length > 0) {
      for (let i = applications.length; i >= 0; i -= 1) {
        const app = applications[i];
        if (app && app.minimized != null && app.minimized === false) {
          context.commit('setActiveWindowIdMutation', app.id);
          i = -1;
        }
      }
    } else {
      context.commit('setActiveWindowIdMutation', null);
    }
  },
};

const getters = {
  getApplications(state: State) {
    return state.applications;
  },
  getActiveWindowId(state: State) {
    return state.activeWindowId;
  },
  getApplicationById: (state: State) => (id: number) => {
    return state.applications.find(app => app.id === id);
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};