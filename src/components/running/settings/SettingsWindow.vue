<template>
  <div class="window">
    <div class="settings-row">
      <div class="settings-row-header">
        Desktop Background
      </div>
      <div style="display: flex; gap: 10px;">
        <MyButton :selected="getBackground === '1'" @click="() => setBackground('1')">1</MyButton>
        <MyButton :selected="getBackground === '2'" @click="() => setBackground('2')">2</MyButton>
        <MyButton :selected="getBackground === '3'" @click="() => setBackground('3')">3</MyButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import MyButton from '../../_shared/MyButton.vue';

export default defineComponent({
  components: {
    MyButton,
  },
  methods: {
    setBackground(value: string) {
      this.$store.dispatch('updateBackground', value);
    },
  },
  computed: {
    ...mapGetters({  
      getBackground: 'getBackground',
    }),
  },
});
</script>

<style scoped lang="scss">
.window {
  width: 100%;
  height: 100%;
  background-color: #333362;
}

.settings-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #292965;
  padding: 10px 20px;
}

.settings-row-header {
  font-size: 17px;
  font-weight: bold;
}
</style>