<template>
  <div class="editor">
    <div class="save-btn" @click="savebtn">
      <SaveIcon class="icon" />
    </div>
    <textarea />
  </div>
</template>

<script>
import SaveIcon from '@/assets/SaveIcon.vue';

export default {
  components: {
    SaveIcon,
  },
  props: {
    id: Number,
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

textarea {
  resize: none;
  outline: none;
  height: 100%;
}

.save-btn {
  height: 20px;
  width: 20px;
  padding: 10px;
  cursor: pointer;
}
</style>
