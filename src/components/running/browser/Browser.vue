<template>
  <div style="width: 100%; height: 100%;">
    <div class="browser-toolbar">
      <div style="flex: 0 0 40px; height: 25px;">
        <ArrowLeft v-if="history.length > 1" @click="backwards" style="height: 25px; width: 25px; cursor: pointer;" />
      </div>
      <div style="flex: 0 0 40px; height: 25px;">
        <HomeIcon @click="home" style="height: 25px; width: 25px; cursor: pointer;" />
      </div>
      <div style="flex: 1 1 auto;">
        <MyInput :value="currentUrl" style="width: 90%;" @keyup.enter="urlBarEnter" />
      </div>
    </div>
    <div class="browser-content">
      <Scroller>
        <Boogle v-if="currentPage?.name === 'Boogle'"/>
        <Bacefook v-else-if="currentPage?.name === 'Bacefook'" />
        <DadGpt v-else-if="currentPage?.name === 'DadGPT'" />
        <Empty v-else-if="currentPage == null || currentPage.name === '404'" />
      </Scroller>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import Scroller from '@/components/_shared/Scroller.vue';
import {
  NetworkItem,
} from '@/store/browser';
import Boogle from './webpages/boogle/Boogle.vue';
import Empty from './webpages/Empty.vue';
import Bacefook from './webpages/Bacefook.vue';
import DadGpt from './webpages/DadGpt.vue';
import HomeIcon from '@/assets/HomeIcon.vue';
import ArrowLeft from '@/assets/ArrowLeft.vue';
import MyInput from '@/components/_shared/MyInput.vue';

export default defineComponent({
  components: {
    Boogle,
    Empty,
    Bacefook,
    DadGpt,
    Scroller,
    HomeIcon,
    ArrowLeft,
    MyInput,
  },
  data(): {
    history: NetworkItem[];
  } {
    return {
      history: [],
    };
  },
  methods: {
    home() {
      this.$store.dispatch('browserHome');
    },
    urlBarEnter(event: any) {
      const value = event.target.value;
      this.$store.dispatch('browserTryToNavigate', value);
    },
    backwards() {
      this.$store.dispatch('browserBackwards');
    },
  },
  computed: {
    ...mapGetters({  
      getBrowserHistory: 'getBrowserHistory',
    }),
    currentPage(): NetworkItem {
      return this.history[this.history.length - 1];
    },
    currentUrl(): string {
      return this.history[this.history.length - 1]?.url || '';
    },
  },
  watch: {
    getBrowserHistory: {
      handler(history) {
        this.history = history;
      },
      immediate: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.browser-toolbar {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  padding-left: 15px;
  background-color: #7575e8;
  border-left: 4px solid #b9b9ff;
  border-bottom: 4px solid #5c5cd5;
  border-right: 4px solid #5c5cd5;
}

.browser-content {
  height: calc(100% - 50px);
  width: 100%;
  overflow: hidden;
  background-color: #333362;
}
</style>