<template>
  <div id="window">
    <div id="header">
      header
    </div>
    window
    <div id="footer">
      footer
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
  #window {
    top: 100px;
    left: 100px;
    width: 200px;
    height: 150px;
    position: absolute;
    background-color: darkgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #header {
    width: 100%;
    background-color: cyan;
  }

  #footer {
    width: 100%;
    background-color: white;
  }
</style>
