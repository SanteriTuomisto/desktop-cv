<template>
  <!-- render service -->
  <div id="desktop">
    <div class="desktop-item-wrapper">
      <DesktopItem
        name="Recycle Bin"
        @click="openWindow('Recycle Bin', 'recycleBin')"
      >
        <TrashIcon />
      </DesktopItem>
      <DesktopItem
        name="Browser"
        @click="openWindow('Browser', 'browser')"
      >
        <BrowserIcon />
      </DesktopItem>
      <DesktopItem
        name="Music Player"
        @click="openWindow('Music Player', 'musicPlayer')"
      >
        <MusicIcon />
      </DesktopItem>
      <DesktopItem
        name="File Explorer"
        @click="openWindow('File Explorer', 'fileExplorer')"
      >
        <FolderIcon />
      </DesktopItem>
    </div>
    <Window
      v-for="app, index in applications" :key="app.id"
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
import FolderIcon from '@/assets/FolderIcon.vue';
import TrashIcon from '@/assets/TrashIcon.vue';
import MusicIcon from '@/assets/MusicIcon.vue';
import BrowserIcon from '@/assets/BrowserIcon.vue';
import Window from './Window.vue';
import DesktopItem from './DesktopItem.vue';

export default {
  components: {
    Window,
    DesktopItem,
    FolderIcon,
    BrowserIcon,
    MusicIcon,
    TrashIcon,
  },
  data() {
    return {
      applications: [],
    };
  },
  mounted() {
    this.applications = this.getApplications;
  },
  methods: {
    openWindow(name, type) {
      const application = {
        name,
        type,
      };
      this.$store.dispatch('openApplication', application);
    },
  },
  computed: {
    ...mapGetters({  
      getApplications: 'getApplications',
    }),
  },
  watch: {
    getApplications(apps) {
      this.applications = apps;
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

  .desktop-item-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
