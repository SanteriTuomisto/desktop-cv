<template>
  <div id="start-menu-button"
    @click="openStartMenu"
  >
    start
  </div>
</template>

<script>
export default {
  methods: {
    openStartMenu() {
      this.$store.dispatch('toggleStartMenu');
    },
  },
};
</script>

<style lang="scss" scoped>
  #start-menu-button {
    width: 100px;
    background-color: red;
    color: white;
    user-select: none;
  }
</style>
