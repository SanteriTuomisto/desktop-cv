interface State {
  background: string;
}

export default {
  state: {
    background: 'green',
  },
  getters: {
    getBackground(state: State): string {
      return state.background;
    },
  },
  mutations: {
    updateBackgroundMutation(state: State, payload: string) {
      state.background = payload;
    }
  },
  actions: {
    updateBackground(context, payload: string) {
      context.commit('updateBackgroundMutation', payload);
    }
  }
};