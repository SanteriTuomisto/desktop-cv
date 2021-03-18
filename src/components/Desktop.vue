<template>
  <div id="desktop">
    <Window />
    <div class="desktop-wrapper">
      <DesktopItem />
      <DesktopItem />
      <DesktopItem />
    </div>
  </div>
</template>

<script>
import DesktopItem from './DesktopItem.vue';
import Window from './Window.vue';

export default {
  components: {
    DesktopItem,
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
