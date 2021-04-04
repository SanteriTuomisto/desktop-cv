<template>
  <div id="taskbar">
    <div>
      <StartMenuButton />
    </div>
    <div>
      open apps
    </div>
    <div>
      00:00
      18.3.2021
    </div>
  </div>
</template>

<script>
import StartMenuButton from './StartMenuButton.vue';

export default {
  components: {
    StartMenuButton,
  },
};
</script>

<style lang="scss" scoped>
  #taskbar {
    width: 100%;
    background-color: coral;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
  }
</style>