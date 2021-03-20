<template>
  <div id="desktop">
    <Window />
  </div>
</template>

<script>
import Window from './Window.vue';

export default {
  components: {
    Window,
  },
};
</script>

<style scoped>
  #desktop {
    height: calc(100vh - 42px);
    width: 100%;
    background-color: gray;
  }

  .desktop-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
