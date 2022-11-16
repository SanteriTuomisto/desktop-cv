<template>
  <div class="computer">
    <div class="screen">
    </div>
    <div class="bottom-controls">
      <button class="start-button" @click="start">start</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$emit('start');
      this.$store.dispatch('togglePower');
    },
  },
};
</script>

<style scoped>
.computer {
  background-color: gray;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 20px;
  box-shadow: 0px 0px 4px 3px inset #1e1e1e;
}
.screen {
  height: 80vh;
  background-color: black;
  border-radius: 15px;
  border: 7px solid #323232;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px 3px inset #1e1e1e;
}
.start-button {
  margin-top: 10px;
  height: 60px;
  width: 60px;
  border-radius: 40px;
  cursor: pointer;
}
</style>
