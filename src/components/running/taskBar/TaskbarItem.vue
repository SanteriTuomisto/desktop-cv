<template>
  <div class="menu-item"
    @click="setActive"
    :class="active ? 'active' : 'inactive'"
  >
    {{ app.name }}
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
    app: {
      type: Object,
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
      if (this.active) {
        this.$store.dispatch('setActiveWindowId', null);
      } else {
        this.$store.dispatch('setActiveWindowId', this.id);
      }
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

<style scoped lang="scss">
  .menu-item {
    padding: 0px 10px;
    display: flex;
    align-items: center;
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