<template>
  <div class="item"
    :class="{
      'item-selected': selected,
    }"
    @click="select"
    @dblclick="dblclick"
  >
    <div class="icon">
      <FolderIcon v-if="type === 'folder' || type === 'fileExplorer'" />
      <BrowserIcon v-else-if="type === 'browser'" />
      <SettingsIcon v-else-if="type === 'settings'" />
      <MusicIcon v-else-if="type === 'musicPlayer'" />
      <FileIcon v-else-if="type === 'file'" class="icon" />
      <TerminalIcon v-else-if="type === 'terminal'" class="icon" />
      <TrashIcon v-else-if="type === 'recycleBin'" class="icon" />
      <MonsterIcon v-else-if="type === 'monsterSlayer'" class="icon" />
    </div>
    <div class="text">
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FolderIcon from '@/assets/FolderIcon.vue';
import BrowserIcon from '@/assets/BrowserIcon.vue';
import SettingsIcon from '@/assets/SettingsIcon.vue';
import MusicIcon from '@/assets/MusicIcon.vue';
import FileIcon from '@/assets/FileIcon.vue';
import MonsterIcon from '@/assets/MonsterIcon.vue';
import TerminalIcon from '@/assets/TerminalIcon.vue';
import TrashIcon from '@/assets/TrashIcon.vue';

export default defineComponent({
  emits: ['selected', 'deselected', 'folderClick'],
  components: {
    FolderIcon,
    BrowserIcon,
    TerminalIcon,
    MusicIcon,
    FileIcon,
    SettingsIcon,
    MonsterIcon,
    TrashIcon,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    select() {
      if (!this.selected) {
        this.$emit('selected', this.id);
      } else {
        this.$emit('deselected', this.id);
      }
    },
    dblclick() {
      if (this.type === 'folder') {
        this.$emit('folderClick', {
          id: this.id,
          name: this.name,
          content: this.content,
        });
        return;
      }
      const application = {
        name: this.name,
        type: this.type,
        fileSystemId: this.id,
      };
      this.$store.dispatch('openApplication', application);
    },
  },
});
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  user-select: none;
  justify-content: center;
  width: 120px;
  height: 80px;
  gap: 5px;
  overflow: hidden;
  cursor: pointer;

  &-selected {
    background-color: #282949;
  }
}

.icon {
  align-self: center;
  height: 30px;
  width: 30px;
}

.text {
  text-align: center;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
}
</style>
