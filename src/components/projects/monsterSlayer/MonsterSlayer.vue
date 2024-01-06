<template>
  <div class="game">
    <div v-if="view === 'main'">
      <button @click="changeView('shop')">shop</button>
      <button @click="changeView('gear')">gear</button>
      <button @click="changeView('fight')">fight</button>
    </div>
    <div v-else-if="view === 'fight'" style="height: 100%;">
      <FightView
        :startPlayerHealth="100"
        :startMonsterHealth="100"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FightView from './FightView.vue';

export default defineComponent({
  components: {
    FightView,
  },
  data(): {
    view: string;
  } {
    return {
      view: 'main',
    };
  },
  methods: {
    changeView(view: string) {
      this.view = view;
    }
  },
});
</script>

<style scoped lang="scss">
.game {
  width: 100%;
  height: 100%;
  background: black;
}
</style>