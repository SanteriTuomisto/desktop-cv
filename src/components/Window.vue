<template>
  <vue-resizable
    class="resizable"
    ref="resizableComponent"
    :dragSelector="dragSelector"
    :active="handlers"
    :fit-parent="fit"
    :min-width="minW || checkEmpty"
    :min-height="minH || checkEmpty"
    :width="width"
    :height="height"
    :left="left"
    :top="top"
    @mount="eHandler"
    @resize:move="eHandler"
    @resize:start="eHandler"
    @resize:end="eHandler"
    @drag:move="eHandler"
    @drag:start="eHandler"
    @drag:end="eHandler"
  >
    <div class="block">
      <div class="drag-container-1">drag_1</div>
      <div class="table-container">
        <table>
          <tr>
            <td>w:{{ width }}</td>
            <td>h:{{ height }}</td>
          </tr>
          <tr>
            <td>l:{{ left }}</td>
            <td>t:{{ top }}</td>
          </tr>
        </table>
      </div>
      <div class="drag-container-2">footer</div>
    </div>
  </vue-resizable>
</template>

<script>
import VueResizable from 'vue-resizable';

export default {
  components: {
    VueResizable
  },
  data() {
    const tW = 350;
    const tH = 250;
    return {
      handlers: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
      left: `calc( 50% - ${tW / 2}px)`,
      top: `calc(50% - ${tH / 2}px)`,
      height: tH,
      width: tW,
      minW: 100,
      minH: 100,
      fit: true,
      event: "",
      dragSelector: ".drag-container-1",
    };
  },
  methods: {
    eHandler(data) {
      this.width = data.width;
      this.height = data.height;
      this.left = data.left;
      this.top = data.top;
      this.event = data.eventName;
    },
  },
  computed: {
    checkEmpty(value) {
      return typeof value !== "number" ? 0 : value;
    },
  },
};
</script>

<style lang="scss" scoped>
  .block {
    height: 100%;
    width: 100%;
    background-color: darkgrey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .resizable {
    background-position: top left;
    width: 350px;
    height: 250px;
    padding: 0;
    border: 4px solid rgba(51,35,158,1);
    color: #ffffff;
    position: relative;
    box-shadow: 2px 2px 4px #464646;
  }

  .table-block {
    display: table;
  }

  .table-row {
    display: table-row;
    text-align: center;
  }

  .drag-container-1,
  .drag-container-2 {
    width: 100%;
    padding: 7px 0px;
    height: 20px;
    background: linear-gradient(63deg, rgba(142,10,119,1) 0%, rgba(51,35,158,1) 56%, rgba(255,0,128,1) 100%);
    color: white;
    text-align: center;
  }

  .drag-container-1 {
    cursor: pointer;
  }

  .table-container {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
