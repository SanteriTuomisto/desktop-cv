<template>
  <div v-if="startUpMenuOpen"
    id="menu"
  >
    menu
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      startUpMenuOpen: false,
    };
  },
  created() {
    this.startUpMenuOpen = this.getStartUpMenuState;
  },
  computed: {
    ...mapGetters({
      getStartUpMenuState: 'getStartUpMenuState',
    }),
  },
  watch: {
    getStartUpMenuState(value) {
      this.startUpMenuOpen = value;
    },
  },
};
</script>

<style lang="scss" scoped>
#menu {
  position: absolute;
  background-color: white;
  bottom: 42px;
  min-height: 200px;
  min-width: 200px;
}
</style>
