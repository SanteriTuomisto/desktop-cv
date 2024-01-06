<template>
  <div style="height: 100%; width: 100%;">
    <Donut3D />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Donut3D from '@/components/projects/3d/donut/Donut3D.vue';

export default defineComponent({
  components: {
    Donut3D,
  },
});
</script>
