<template>
  <div style="height: 100%; width: 100%;">
    <Terminal
      welcomeMessage="myOs 1.0.4"
      prompt="$ "
      aria-label="Terminal"
      class="terminal"
      :pt="{
        root: 'bg-gray-900 text-white border-round',
        prompt: 'text-gray-400 mr-2',
        command: 'text-primary-300',
        response: 'text-primary-300',
      }"
    />
  </div>
</template>

<script>
import Terminal from "primevue/terminal";
import TerminalService from "primevue/terminalservice";
import "primevue/resources/themes/lara-light-green/theme.css";

export default {
  components: {
    Terminal,
  },
  mounted() {
    TerminalService.on("command", this.commandHandler);
  },
  beforeUnmount() {
    TerminalService.off("command", this.commandHandler);
  },
  methods: {
    commandHandler(text) {
      let response;
      let argsIndex = text.indexOf(" ");
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

      switch (command) {
        case "help":
          response = "commands: date, greet {0}, random";
          break;
        case "date":
          response = "Today is " + new Date().toDateString();
          break;
        case "greet":
          response = "Moi " + text.substring(argsIndex + 1);
          break;
        case "random":
          response = Math.floor(Math.random() * 100);
          break;
        default:
          response = "Unknown command: " + command + ", try help";
      }

      TerminalService.emit("response", response);
    },
  },
};
</script>

<style scoped>
.terminal {
  border: none;
  background-color: black;
  color: #d2d2d2;
  height: 100%;
  width: 100%;
}
</style>
