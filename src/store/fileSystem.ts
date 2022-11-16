import { ActionContext } from 'vuex';

interface Item {
  id: number;
  type: 'file' | 'folder' | 'browser' | 'musicPlayer';
  name: string;
  content?: Array<Item | 'string'>;
}

interface State {
  fileSystemItems: Array<Item>;
}

const state: State = {
  fileSystemItems: [
    {
      id: 0,
      type: 'folder',
      name: 'My Computer',
      content: [
        {
          id: 3,
          type: 'folder',
          name: 'Documents',
          content: [
            {
              id: 5,
              type: 'file',
              name: 'Test',
            }
          ],
        },
        {
          id: 4,
          type: 'browser',
          name: 'Browser',
        },
      ],
    },
    {
      id: 1,
      type: 'browser',
      name: 'Browser',
    },
    {
      id: 2,
      type: 'musicPlayer',
      name: 'Music',
    },
  ],
};

const mutations = {};
const actions = {};
const getters = {
  getFileSystemItems(state: State) {
    return state.fileSystemItems;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};