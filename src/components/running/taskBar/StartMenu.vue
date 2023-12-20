<template>
  <div v-if="showStartMenu" id="menu">
    <StartMenuItem
      text="Browser"
      @click="openWindow('Browser', 'browser')"
    >
      <BrowserIcon class="icon" />
    </StartMenuItem>
    <StartMenuItem
      text="Music Player"
      @click="openWindow('Music Player', 'musicPlayer')"
    >
      <MusicIcon class="icon" />
    </StartMenuItem>
    <StartMenuItem
      text="File Explorer"
      @click="openWindow('File Explorer', 'fileExplorer')"
    >
      <FolderIcon class="icon"/>
    </StartMenuItem>
    <StartMenuItem
      text="Terminal"
      @click="openWindow('Terminal', 'terminal')"
    >
      <FolderIcon class="icon"/>
    </StartMenuItem>
    <StartMenuItem :id="2" text="Shut down" @click="powerOff">
      <PowerIcon class="icon" />
    </StartMenuItem>
  </div>
</template>

<script>
import FolderIcon from '@/assets/FolderIcon.vue';
import PowerIcon from '@/assets/PowerIcon.vue';
import MusicIcon from '@/assets/MusicIcon.vue';
import BrowserIcon from '@/assets/BrowserIcon.vue';
import StartMenuItem from './StartMenuItem.vue';

export default {
  components: {
    StartMenuItem,
    FolderIcon,
    PowerIcon,
    MusicIcon,
    BrowserIcon,
  },
  props: {
    showStartMenu: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    powerOff() {
      this.$store.dispatch('togglePower');
    },
    openWindow(name, type) {
      const application = {
        name,
        type,
      };
      this.$store.dispatch('openApplication', application);
    },
  },
};
</script>

<style scoped lang="scss">
#menu {
  z-index: 3;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #8000ff;
  bottom: 46px;
  width: 300px;
  min-width: 200px;
  border-top: 4px solid #004080;
  border-left: 4px solid #004080;
  border-right: 4px solid #000080;
  border-bottom: 4px solid #000080;
  box-shadow: 4px 0px 0px 0px #000000;
}

.icon {
  width: 15px;
  height: 15px;
}
</style>
