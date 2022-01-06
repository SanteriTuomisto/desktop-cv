<template>
  <StartMenu :showStartMenu="getShowStartMenu" />
  <div id="taskbar">
    <div class="start-menu-btn"
      @click="startButtonClick" 
    >
      Start
    </div>
    <div class="taskbarItems"
    >
      <TaskbarItem
        v-for="app in openApplications" :key="app.id"
        :id="app.id"
        :app="app"
      />
    </div>
    <div id="datetime">
      <div class="time">{{ time }}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters } from 'vuex';
import StartMenu from './StartMenu.vue';
import TaskbarItem from './TaskbarItem.vue';

export default {
  components: {
    StartMenu,
    TaskbarItem,
  },
  data() {
    return {
      date: null,
      time: null,
      getDateInterval: null,
      openApplications: [],
    };
  },
  mounted() {
    this.openApplications = this.getOpenApplications;
    this.getDate();
    this.getDateInterval = setInterval(() => {
      this.getDate();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.getDateInterval);
  },
  methods: {
    getDate() {
      // this.date = moment().format('D.M.YYYY');
      this.time = moment().format('H:mm');
    },
    startButtonClick() {
      this.$store.dispatch('toggleStartMenu');
    },
  },
  computed: {
    ...mapGetters({  
      getOpenApplications: 'getOpenApplications',
    }),
    getShowStartMenu() {
      return this.$store.state.showStartMenu;
    },
  },
  watch: {
    getOpenApplications(apps) {
      this.openApplications = apps;
    },
  },
};
</script>

<style scoped>
  #taskbar {
    height: 42px;
    width: 100%;
    background-color: #8080ff;
    border-top: 4px solid #b9b9ff;
    display: flex;
    justify-content: space-between;
    color: #ffff00;
    font-weight: bold;
  }
  
  .start-menu-btn {
    width: 128px;
    background-color: #b9b9ff;
    border-left: 4px solid #b9b9ff;
    border-bottom: 4px solid #5c5cd5;
    border-right: 4px solid #5c5cd5;
    font-style: italic;
    font-variant: small-caps;
    font-size: 24px;
    user-select: none;
    padding-left: 8px;
    line-height: 40px;
  }

  .start-menu-btn:active {
    background-color: #5c5cd5;
    box-shadow: inset 1px 1px 0px 1px #000000;
  }

  .taskbarItems {
    display: flex;
    width: 100%;
    overflow: hidden;
  }

  #datetime {
    text-align: center;
  }

  .time {
    width: 80px;
    background-color: #5c5cd5;
    height: 34px;
    margin: 4px;
    vertical-align: baseline;
    line-height: 34px;
    user-select: none;
    box-shadow: inset 1px 1px 0px 1px #000000;
  }
</style>