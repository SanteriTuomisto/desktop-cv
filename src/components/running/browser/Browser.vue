<template>
  <div style="width: 100%; height: 100%;">
    <div style="display: flex; width: 100%;">
      <div style="flex: 0 0 30px;">
        <button v-if="history.length > 1" type="button" @click="backwards">
          &lt;-
        </button>
      </div>
      <div style="flex: 0 0 30px;">
        ->
      </div>
      <div style="flex: 0 0 50px;">
        <button @click="home">home</button>
      </div>
      <div style="flex: 1 1 auto;">
        <input type="text" style="width: 90%;" :value="currentUrl" @keyup.enter="urlBarEnter" />
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
import Boogle from './webpages/Boogle.vue';
import Empty from './webpages/Empty.vue';
import Bacefook from './webpages/Bacefook.vue';
import DadGpt from './webpages/DadGpt.vue';

export default defineComponent({
  components: {
    Boogle,
    Empty,
    Bacefook,
    DadGpt,
    Scroller,
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
.browser-content {
  height: calc(100% - 22px);
  width: 100%;
  overflow: hidden;
}
</style>