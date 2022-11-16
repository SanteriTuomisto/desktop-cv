<template>
  <div class="file-explorer">
    <div class="buttons">
      <div style="display: flex; align-items: center;">
        <HomeIcon class="icon" @click="goHome" />
        <ArrowLeft class="icon" @click="back" v-if="!isHome" />
      </div>
      <div style="display: flex; align-items: center;">
        <button>new</button>
        <button :disabled="selectedItems.length !== 1">rename</button>
        <button :disabled="selectedItems.length === 0">delete</button>
      </div>
    </div>
    <div class="path">
      <span v-for="(p, index) in paths" :key="`path-item-${index}`">{{ p.name }}/</span>
    </div>
    <div class="items">
      <FileSystemItem
        v-for="(item, index) in getCurrentFolder"
        :key="`file-explorer-${index}`"
        :id="item.id"
        :type="item.type"
        :name="item.name"
        :content="item.content"
        :selected="itemSelected(item.id)"
        @selected="selected"
        @deselected="deselected"
        @folderClick="folderClick"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FileSystemItem from './FileSystemItem.vue';
import HomeIcon from '@/assets/HomeIcon.vue';
import ArrowLeft from '@/assets/ArrowLeft.vue';

export default {
  components: {
    FileSystemItem,
    HomeIcon,
    ArrowLeft,
  },
  data() {
    return {
      selectedItems: [],
      paths: [{
        name: 'home',
        id: -1,
      }],
    };
  },
  methods: {
    folderClick({ id, name, content }) {
      this.selectedItems = [];
      this.paths.push({ name, id, content });
    },
    selected(id) {
      this.selectedItems.push(id);
    },
    deselected(id) {
      const index = this.selectedItems.indexOf(id);
      if (index === -1) {
        return;
      }
      this.selectedItems.splice(index, 1);
    },
    itemSelected(id) {
      return this.selectedItems.includes(id);
    },
    goHome() {
      this.paths = [{ name: 'home', id: -1 }];
    },
    back() {
      this.paths.pop();
    },
  },
  computed: {
    ...mapGetters({  
      getFileSystemItems: 'getFileSystemItems',
    }),
    getCurrentFolder() {
      const items = this.getFileSystemItems;
      if (this.isHome) {
        return items;
      }
      const lastItem = this.paths[this.paths.length - 1];
      return lastItem.content;
    },
    isHome() {
      return this.paths.length === 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.file-explorer {
  width: 100%;
  height: 100%;
  background-color: #333362;
}

.buttons {
  display: flex;
  justify-content: space-between;
  background-color: #7575e8;
  border-left: 4px solid #b9b9ff;
  border-right: 4px solid #5c5cd5;
}

.items {
  display: flex;
  flex-wrap: wrap;
}

.icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 5px 10px;
}

.path {
  background-color: #7575e8;
  border-left: 4px solid #b9b9ff;
  border-right: 4px solid #5c5cd5;
  color: black;
  padding: 2px 5px;
  overflow: hidden;
  border-bottom: 4px solid #5c5cd5;
  user-select: none;
}
</style>
