<template>
  <input
    class="input"
    :type="type"
    :value="getValue"
    @input="input"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['update:modelValue', 'input'],
  props: {
    modelValue: {
      type: String,
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    input(event: any) {
      this.$emit('update:modelValue', event.target.value);
      this.$emit('input', event.target.value);
    },
  },
  computed: {
    getValue() {
      if (this.modelValue != undefined) {
        return this.modelValue;
      }
      return this.value;
    },
  },
});
</script>

<style lang="scss" scoped>
.input {
  outline: none;
  background-color: #7575e8;
  color: white;
  height: 32px;
  font-size: 17px;
  padding: 4px;
  border-bottom: 4px solid #b8b8ff;
  border-right: 4px solid #b9b9ff;
  border-left: 4px solid #5c5cd5;
  border-top: 4px solid #5c5cd5;
}
</style>