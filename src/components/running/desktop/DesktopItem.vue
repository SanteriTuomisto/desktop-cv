<template>
  <div class="desktop-item"
    @click="click"
  >
    <div style="height: 50px; width: 50px; background-color: gray;">
      icon
    </div>
    <div class="item-name">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  emits: ['click'],
  props: {
    icon: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
  .desktop-item {
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 100px;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }
  .item-name {
    margin-top: 10px;
    font-weight: bold;
  }
</style>
