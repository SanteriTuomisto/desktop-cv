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

<script lang="ts">
import { defineComponent } from 'vue';
import Desktop from './components/running/desktop/Desktop.vue';
import Startup from './components/boot/Startup.vue';
import ShutDown from './components/shutDown/ShutDown.vue';
import Taskbar from './components/running/taskBar/Taskbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Desktop,
    Taskbar,
    ShutDown,
    Startup,
  },
  created() {
    // Clear vuex persist if version has changed
    const currentVersion = import.meta.env.APP_VERSION;
    console.log(currentVersion);
    if (this.$store.state.version !== currentVersion) {
      localStorage.removeItem('myOs-persist-store');
    }
    this.$store.dispatch('setVersion', currentVersion);
  },
  computed: {
    shutDownState() {
      if (import.meta.env.DEV) {
        return true;
      }
      return this.$store.state.powerOn;
    },
    startupState() {
      if (import.meta.env.DEV) {
        return false;
      }
      return this.$store.state.startup;
    },
  },
});
</script>

<style>
#app {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
