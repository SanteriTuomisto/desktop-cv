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
        name="Music"
        @click="openWindow('Music', 'musicPlayer')"
      >
        <MusicIcon />
      </DesktopItem>
      <DesktopItem
        name="File Explorer"
        @click="openWindow('File Explorer', 'fileExplorer')"
      >
        <FolderIcon />
      </DesktopItem>
      <DesktopItem
        name="Terminal"
        @click="openWindow('Terminal', 'terminal')"
      >
        <TerminalIcon />
      </DesktopItem>
    </div>
    <Window
      v-for="app, index in applications" :key="app.id"
      :id="app.id"
      :app="app"
      :index="index"
      :hideBottomBorder="app.type === 'fileExplorer'"
      :minW="windowMinWidth(app.type)"
      :minH="app.type === 'fileExplorer' ? 350 : 250"
    >
      <FileExplorer v-if="app.type === 'fileExplorer'" />
      <MusicPlayer v-if="app.type === 'musicPlayer'" />
      <Browser v-if="app.type === 'browser'" />
      <TextEditor v-if="app.type === 'file'" :id="app.id" :fileSystemId="app.fileSystemId" />
      <TerminalWindow v-if="app.type === 'terminal'" />
    </Window>
  </div>
  <div class="desktop-background">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FolderIcon from '@/assets/FolderIcon.vue';
import TerminalIcon from '@/assets/TerminalIcon.vue';
import TrashIcon from '@/assets/TrashIcon.vue';
import MusicIcon from '@/assets/MusicIcon.vue';
import BrowserIcon from '@/assets/BrowserIcon.vue';
import Window from './Window.vue';
import DesktopItem from './DesktopItem.vue';
import FileExplorer from '../fileExplorer/FileExplorer.vue';
import Browser from '../browser/Browser.vue';
import MusicPlayer from '../musicPlayer/MusicPlayer.vue';
import TextEditor from '../editor/TextEditor.vue';
import TerminalWindow from '../terminal/TerminalWindow.vue';

export default {
  components: {
    Window,
    DesktopItem,
    FolderIcon,
    TerminalIcon,
    BrowserIcon,
    MusicIcon,
    TrashIcon,
    FileExplorer,
    Browser,
    MusicPlayer,
    TextEditor,
    TerminalWindow,
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
    windowMinWidth(type) {
      if (type === 'fileExplorer') {
        return 450;
      }
      if (type === 'file') {
        return 659;
      }
      return 400;
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

<style scoped lang="scss">
  #desktop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 46px;
    overflow: hidden;
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
    height: 100%;
    width: 100%;
    align-content: flex-start;
    flex-wrap: wrap;
  }
</style>
