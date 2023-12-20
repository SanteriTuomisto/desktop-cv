import { ActionContext } from 'vuex';

interface Item {
  id: number;
  type: 'file' | 'folder' | 'browser' | 'musicPlayer' | 'terminal';
  name: string;
  content?: Array<Item>;
}

interface State {
  nextFileId: number;
  fileSystemItems: Array<Item>;
}

const state: State = {
  nextFileId: 6,
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
    {
      id: 3,
      type: 'terminal',
      name: 'Terminal',
    },
  ],
};

const mutations = {
  increaseNextFileIdMut(state: State) {
    state.nextFileId = state.nextFileId + 1;
  },
  addNewFileMut(state: State, data: { newItem: Item, currentPath: Item[] }) {
    const currentPath = data.currentPath;
    const items = state.fileSystemItems;
    // Add to root
    if (currentPath.length === 1 && currentPath[0].id === -1) {
      items.push(data.newItem);
      return;
    }
    // Find correct node
    let loopItem = null;
    for (let i = 0; i < currentPath.length; i += 1) {
      const cp = currentPath[i];
      if (loopItem?.content != null) {
        loopItem = loopItem.content.find((i: Item) => i.id === cp.id);        
      } else {
        loopItem = items.find((i) => i.id === cp.id);        
      }
    }
    if (loopItem?.content == null) {
      return;
    }
    loopItem.content.push(data.newItem);
  },
};
const actions = {
  addNewFile(context: ActionContext<State, any>, data: { item: Item, currentPath: Item[] }) {
    const newItem = data.item;
    newItem.id = context.state.nextFileId;
    if (newItem.type === 'folder') {
      newItem.content = [];
    }
    context.commit('increaseNextFileIdMut');
    context.commit('addNewFileMut', { currentPath: data.currentPath, newItem });
  },
};
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