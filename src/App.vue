<template>
  <Desktop />
  <Taskbar />
</template>

<script>
import Desktop from './components/Desktop.vue';
import Taskbar from './components/Taskbar.vue';

export default {
  name: 'App',
  components: {
    Desktop,
    Taskbar,
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
