<template>
  <div id="desktop">
    <div class="desktop-wrapper">
      <DesktopItem />
      <DesktopItem />
      <DesktopItem />
    </div>
  </div>
</template>

<script>
import DesktopItem from './DesktopItem.vue';

export default {
  components: {
    DesktopItem,
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
