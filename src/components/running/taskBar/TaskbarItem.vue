<template>
  <div class="menu-item"
    @click="setActive"
    :class="active ? 'active' : 'inactive'"
  >
    {{ name }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
  },
  created() {
    const activeId = this.getActiveWindowId;
    this.active = activeId === this.id;
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    setActive() {
      this.$store.dispatch('setActiveWindowId', this.id);
    },
  },
  computed: {
    ...mapGetters({  
      getActiveWindowId: 'getActiveWindowId',
    }),
  },
  watch: {
    getActiveWindowId(activeId) {
      this.active = activeId === this.id;
    },
  },
};
</script>

<style scoped>
  .menu-item {
    padding: 10px;
    color: #ffff00;
    font-weight: bold;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .inactive {
    background-color: #8080ff;
    border-left: 2px solid #b9b9ff;
    border-right: 2px solid #5c5cd5;
  } 

  .menu-item:active, .active {
    background-color: #6e6eeb;
    border-top: 2px solid #5c5cd5;
    border-left: 2px solid #5c5cd5;
    border-bottom: 2px solid #b9b9ff;
    border-right: 2px solid #5c5cd5;
  }
</style>