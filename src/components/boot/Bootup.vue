<template>
  <div class="console">
    <div class="text">
      COMPUTER (C) 1990 Motherboard
    </div>
    <div class="text" style="animation-delay: 700ms;">
      {{ row2 }}
    </div>
    <div class="text" style="animation-delay: 1400ms;">
      {{ row3 }}
    </div>
    <div class="text-infinite" style="margin-top: 40px; animation-delay: 2100ms;" >
      {{ row4 }}
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.row2 = 'VERSION 1.0.4';
    }, 700);
    setTimeout(() => {
      this.row3 = 'CPU: Intel (R) CPU 330';
    }, 1400);
    setTimeout(() => {
      this.row4 = 'Booting from Hard Disk...';
    }, 2100);
  },
  data() {
    return {
      row2: null,
      row3: null,
      row4: null,
    };
  },
};
</script>

<style scoped lang="scss">
.console {
  font-weight: bold;
  font-family: monospace;
  font-size: 18px;
  padding: 30px 40px;
  color: #878787;
  user-select: none;
}

.text {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: type 1s steps(60, end);  
}

.text-infinite {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: type 2s steps(60, end) infinite;
}
@keyframes type{ 
  from { width: 0; } 
} 
</style>