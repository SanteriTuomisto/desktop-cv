<template>
  <div v-if="showStartMenu" id="menu">
    <StartMenuItem :id="1" text="File Explorer" @click="fileExplorer" />
    <StartMenuItem :id="2" text="Shut down" @click="powerOff" />
  </div>
</template>

<script>
import StartMenuItem from './StartMenuItem.vue';

export default {
  components: {
    StartMenuItem, 
  },
  props: {
    showStartMenu: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    powerOff() {
      this.$store.dispatch('togglePower');
    },
    fileExplorer() {
      const application = {
        name: 'File Explorer',
        type: 'fileExplorer',
        position: 0,
      };
      this.$store.dispatch('openApplication', application);
    },
  },
};
</script>

<style scoped>
#menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #8000ff;
  bottom: 46px;
  width: 300px;
  min-width: 200px;
  border-top: 4px solid #004080;
  border-left: 4px solid #004080;
  border-right: 4px solid #000080;
  border-bottom: 4px solid #000080;
  box-shadow: 4px 0px 0px 0px #000000;
}
</style>
