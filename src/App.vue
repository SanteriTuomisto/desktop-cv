<template>
  <div v-if="!shutDownState">
    <ShutDown />
  </div>
  <div v-else-if="bootupState">
    <Bootup />
  </div>
  <div v-else>
    <Desktop />
    <Taskbar />
  </div>
</template>

<script>
import Desktop from './components/running/desktop/Desktop.vue';
import Bootup from './components/boot/Bootup.vue';
import ShutDown from './components/shutDown/ShutDown.vue';
import Taskbar from './components/running/taskBar/Taskbar.vue';

export default {
  name: 'App',
  components: {
    Bootup,
    Desktop,
    Taskbar,
    ShutDown,
  },
  computed: {
    shutDownState() {
      return this.$store.state.powerOn;
    },
    bootupState() {
      return this.$store.state.bootup;
    },
  },
}
</script>

<style>
#app {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
