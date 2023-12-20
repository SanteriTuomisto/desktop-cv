<template>
  <div class="editor">
    <div class="save-btn" @click="savebtn">
      <SaveIcon class="icon" />
    </div>
    <div style="height: 100%;">
      <Editor v-model="value" editorStyle="height: 220px;"/>
    </div>
  </div>
</template>

<script>
import SaveIcon from '@/assets/SaveIcon.vue';
import Editor from 'primevue/editor';

export default {
  components: {
    SaveIcon,
    Editor,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    savebtn() {
      this.$store.dispatch('closeApplication', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.save-btn {
  height: 20px;
  width: 20px;
  padding: 10px;
  cursor: pointer;
}
</style>
