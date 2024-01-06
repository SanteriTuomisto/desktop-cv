<template>
  <div class="editor">
    <div class="save-btn" @click="savebtn">
      <SaveIcon class="icon" />
      <div>
        Save
      </div>
    </div>
    <div style="height: 100%; background-color: white;">
      <Editor v-model="value" editorStyle="height: calc(100% - 42px);" style="height: 100%;" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SaveIcon from '@/assets/SaveIcon.vue';
import Editor from 'primevue/editor';

export default defineComponent({
  components: {
    SaveIcon,
    Editor,
  },
  props: {
    id: Number,
    fileSystemId: Number,
  },
  data() {
    return {
      value: '',
    };
  },
  created() {
    const fileSystemItem = this.$store.getters.getItem(this.fileSystemId);
    if (fileSystemItem && fileSystemItem.data) {
      this.value = fileSystemItem.data;
    }
  },
  methods: {
    savebtn() {
      this.$store.dispatch('closeApplication', this.id);
      this.$store.dispatch('saveFileContent', { id: this.fileSystemId, text: this.value });
    },
  },
}) ;
</script>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #5c5cd5;
}

.save-btn {
  height: 24px;
  cursor: pointer;
  display: flex;
  padding: 2px 5px;
  gap: 5px;
  width: 72px;
  background-color: #8080ff;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
