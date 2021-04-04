<template>
  <div id="desktop">
    <Window />
  </div>
  <div class="desktop-wrapper">
    <DesktopItem />
    <DesktopItem />
    <DesktopItem />
  </div>
  <StartMenu />
</template>

<script>
import Window from './Window.vue';
import DesktopItem from './DesktopItem.vue';
import StartMenu from './StartMenu.vue';

export default {
  components: {
    Window,
    DesktopItem,
    StartMenu,
  },
};
</script>

<style lang="scss" scoped>
  #desktop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 42px;
  }

  .desktop-wrapper {
    height: calc(100vh - 42px);
    width: 100%;
    background-color: gray;
    display: flex;
    flex-direction: column;
  }
</style>
