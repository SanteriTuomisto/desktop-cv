<template>
  <!-- render service -->
  <div id="desktop">
    <DesktopItem
      name="File Explorer"
      @click="fileExplorer"   
    />
    <Window
      v-for="app, index in openApplications" :key="app.id"
      :id="app.id"
      :app="app"
      :index="index"
    />
  </div>
  <div class="desktop-background">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Window from './Window.vue';
import DesktopItem from './DesktopItem.vue';

export default {
  components: {
    Window,
    DesktopItem,
  },
  data() {
    return {
      openApplications: [],
    };
  },
  mounted() {
    this.openApplications = this.getOpenApplications;
  },
  methods: {
    fileExplorer() {
      const application = {
        name: 'File Explorer',
        type: 'fileExplorer',
      };
      this.$store.dispatch('openApplication', application);
    },
  },
  computed: {
    ...mapGetters({  
      getOpenApplications: 'getOpenApplications',
    }),
  },
  watch: {
    getOpenApplications(apps) {
      this.openApplications = apps;
    },
  },
};
</script>

<style scoped>
  #desktop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 46px;
  }

  .desktop-background {
    height: calc(100vh - 46px);
    width: 100%;
    background: rgb(0,124,128);
    background: linear-gradient(63deg, rgba(0,124,128,1) 0%, rgba(0,128,67,1) 100%);
    display: flex;
    flex-direction: column;
  }
</style>
