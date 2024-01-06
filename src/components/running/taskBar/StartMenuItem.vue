<template>
  <div class="menu-item"
    @click="menuItemClicked"
  >
    <div>
      <slot/>
    </div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['menuItemClicked'],
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    menuItemClicked() {
      this.$store.dispatch('toggleStartMenu');
      this.$emit('menuItemClicked');
    },
  },
});
</script>

<style scoped lang="scss">
  .menu-item {
    display: flex;
    padding-left: 12px;
    gap: 15px;
    background-color: #8080ff;
    height: 50px;
    align-items: center;
    border-top: 4px solid #b9b9ff;
    border-left: 4px solid #b9b9ff;
    border-bottom: 4px solid #5c5cd5;
    border-right: 4px solid #5c5cd5;
    color: #ffff00;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
  }

  .menu-item:active {
    border-top: 4px solid #5c5cd5;
    border-left: 4px solid #5c5cd5;
    border-bottom: 4px solid #b9b9ff;
    border-right: 4px solid #5c5cd5;
  }
</style>