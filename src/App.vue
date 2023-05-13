<template>
  <div v-if="!shutDownState">
    <ShutDown />
  </div>
  <div v-else-if="startupState">
    <Startup />
  </div>
  <div v-else>
    <Desktop />
    <Taskbar />
  </div>
</template>

<script>
import Desktop from './components/running/desktop/Desktop.vue';
import Bootup from './components/boot/Bootup.vue';
import Startup from './components/boot/Startup.vue';
import ShutDown from './components/shutDown/ShutDown.vue';
import Taskbar from './components/running/taskBar/Taskbar.vue';

export default {
  name: 'App',
  components: {
    Desktop,
    Taskbar,
    ShutDown,
    Startup,
  },
  computed: {
    shutDownState() {
      if (process.env.NODE_ENV === 'development') {
        return true;
      }
      return this.$store.state.powerOn;
    },
    startupState() {
      if (process.env.NODE_ENV === 'development') {
        return false;
      }
      return this.$store.state.startup;
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
