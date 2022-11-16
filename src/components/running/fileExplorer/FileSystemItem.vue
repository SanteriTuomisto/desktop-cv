<template>
  <div class="item"
    :class="{
      'item-selected': selected,
    }"
    @click="select"
    @dblclick="dblclick"
  >
    <div class="icon">
      <FolderIcon v-if="type === 'folder'" />
      <BrowserIcon v-else-if="type === 'browser'" />
      <MusicIcon v-else-if="type === 'musicPlayer'" />
      <FileIcon v-else-if="type === 'file'" class="icon" />
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
import MusicIcon from '@/assets/MusicIcon.vue';
import FileIcon from '@/assets/FileIcon.vue';

export default defineComponent({
  emits: ['selected', 'deselected', 'folderClick'],
  components: {
    FolderIcon,
    BrowserIcon,
    MusicIcon,
    FileIcon,
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
  padding: 5px;
  margin: 10px;
  user-select: none;
  width: 70px;
  height: 55px;
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
