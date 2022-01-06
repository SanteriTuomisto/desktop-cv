<template>
  <div class="menu-item"
    @click="menuItemClicked"
  >
    <div style="margin-right: 12px;">
      <slot/>
    </div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
  .menu-item {
    display: flex;
    background-color: #8080ff;
    padding: 10px;
    border-top: 4px solid #b9b9ff;
    border-left: 4px solid #b9b9ff;
    border-bottom: 4px solid #5c5cd5;
    border-right: 4px solid #5c5cd5;
    color: #ffff00;
    font-weight: bold;
    user-select: none;
  }

  .menu-item:active {
    border-top: 4px solid #5c5cd5;
    border-left: 4px solid #5c5cd5;
    border-bottom: 4px solid #b9b9ff;
    border-right: 4px solid #5c5cd5;
  }
</style>