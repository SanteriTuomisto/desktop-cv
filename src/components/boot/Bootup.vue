<template>
  <div class="console">
    <div>
      COMPUTER (C) 1990 Motherboard
    </div>
    <div>
      VERSION 1.0.4
    </div>
    <div>
      CPU: Intel (R) CPU 330
    </div>
    <div style="margin-top: 40px;">
      Booting from Hard Disk...
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('toggleBootup');
    }, 2000);
  },
};
</script>

<style>
.console {
  font-weight: bold;
  font-family: monospace;
  font-size: 18px;
  padding: 20px 40px;
  background-color: black;
  color: gray;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>